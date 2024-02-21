# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    f_secure.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/21 13:42:24 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/21 22:33:18 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from playwright.async_api import async_playwright
from asyncio import sleep as async_sleep

# Custom imports
from ..utils.constants import *


async def create_account(data):
	"""
	Will make the call to create account and 
	"""
	try:
		# Setting up page and drivers
		p = await async_playwright().start()
		browser = await p.chromium.launch(headless=False)
		page = await browser.new_page()
		
		# Navigating to page and setting up iframe it is using
		await page.goto('https://my.f-secure.com/register/', wait_until="networkidle")
		await page.click('button[data-js-accept-all="false"]')
		frame = page.frame_locator(".dynamic-iframe")
		
		# Filling out form and submitting it
		await frame.get_by_label("First name *").fill(data.first_name)
		await frame.get_by_label("Last name *").fill(data.last_name)
		await frame.get_by_label("Email address *").fill(data.email)
		await frame.get_by_label("Password *").fill(f"Eg{data.receipt}")

	except Exception as e:
		print(f"Exception caught: {e}")
	finally:
		await browser.close()
		await p.stop()
		