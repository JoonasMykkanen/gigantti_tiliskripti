# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    f_secure.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/21 13:42:24 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/24 22:51:05 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from playwright.async_api import async_playwright
import asyncio

# Custom imports
from ..utils.constants import *
from ..utils.logger import ft_printf

async def catch_response(response, response_info):
	request = response.request
	if not RESPONSE_URL in response.url or request.method != POST:
		return
	
	await response_info.put(response)


async def check_response(response):
	pass


async def create_account(data, key):
	"""
	Will make the call f-secure endpoint to create an account

	Parameters:
	data (Data): A data object containing customer info from frontend\n
	key (str): string containing product key from database\n

	Returns:
	None: Will raise exception if error occurred
	"""
	try:
		# Setting up page and drivers
		response_info = asyncio.Queue()
		p = await async_playwright().start()
		browser = await p.chromium.launch(headless=False)
		browser.set_default_timeout(10000)
		page = await browser.new_page()
		page.on('response', lambda response: asyncio.create_task(catch_response(response, response_info)))

		# Navigating to page and setting up iframe it is using
		await page.goto('https://my.f-secure.com/register/', wait_until="networkidle")
		await page.click('button[data-js-accept-all="false"]')
		frame = page.frame_locator(".dynamic-iframe")
		
		# Filling out form and submitting it
		await frame.get_by_label("First name *").fill(data.first_name)
		await frame.get_by_label("Last name *").fill(data.last_name)
		await frame.get_by_label("Email address *").fill(data.email)
		await frame.get_by_label("Password *").fill(f"Eg{data.receipt}")
		await frame.get_by_role("button").click()

		# Waiting for page.on() call to load response to the Queue
		response = await response_info.get()
		await check_response(response)
	
	finally:
		await page.close()
		await browser.close()
		await p.stop()
		