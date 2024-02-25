# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    f_secure.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/21 13:42:24 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 12:24:24 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from playwright.async_api import async_playwright
import asyncio

# Custom imports
from ..utils.logger import ft_printf
from ..utils.constants import *
from ..utils.errors import *

async def catch_response(response, response_info):
	request = response.request

	if REGISTER_API in response.url and request.method == POST:
		await response_info.put(response)
	if AUTH_API in response.url:
		await response_info.put(response)


# TODO: Add checks for "key already used
#		get_registration_url? request can be used here
async def check_response(response, response_info):
	"""
	Checks caught responses from the server and compares status codes and contents
	to determine wheter register was succesful or not

	Parameters:
	response ():
	response_info ():

	Returns:
	None if succeeds, otherwise raises error
	"""
	if response.status == 200 and REGISTER_API in response.url:
		body = await response.text()
		if EMAIL_USED in body:
			raise EmailUsedError()
	
	
	if response.status == 302:
		auth_response = await response_info.get()
		if auth_response.status == 200 and AUTH_API in response.url:
			return

	raise RuntimeError("Could not verify request status")

	


async def create_account(data, key):
	"""
	Will make the call f-secure endpoint to create an account

	Parameters:
	data (Data): A data object containing customer info from frontend\n
	key (str): string containing product key from database\n

	Returns:
	None: Will raise exception if error occurred
	"""
	p = None
	page = None
	browser = None
	try:
		# Setting up page and drivers
		response_info = asyncio.Queue()
		p = await async_playwright().start()
		browser = await p.chromium.launch(headless=False)
		page = await browser.new_page()
		page.set_default_timeout(10000)
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
		await check_response(response, response_info)
	
	except asyncio.QueueEmpty as error_msg:
		await ft_printf(error_msg, ERROR)
		raise RuntimeError(error_msg)
	
	finally:
		if page:
			await page.close()
		if browser:
			await browser.close()
		if p:
			await p.stop()
		