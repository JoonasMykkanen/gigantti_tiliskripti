# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    logger.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/16 08:03:13 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/16 08:41:07 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
import datetime

# Custom imports
from .timestamp import get_timestamp
from .constants import *

def get_color(level):
	"""
	Gets color based on level

	Parameters:
	level: (int): levels of logging

	Returns:
	str: escape sequence for color
	"""
	if level == DEBUG:
		return CYAN
	elif level == INFO:
		return WHITE
	elif level == WARNING:
		return YELLOW
	elif level == ERROR:
		return RED
	elif level == CRITICAL:
		return MAGENTA
	return ""
		

async def ft_printf(msg, level):
	"""
	Custom logging function instead of heavier libraries

	Parameters:
	msg: (str): text to print out
	level: (int): Logging level. Possible values:
		- DEBUG		(1): Detailed information 
		- INFO		(2): Normal prints, things are ok
		- WARNING	(3): 400 exceptions caught
		- ERROR		(4): 500 exceptions caught
		- CRITICAL	(5): if malloc fails..? :D

	Returns:
	None
	"""
	color = get_color(level)
	stamp = get_timestamp().strftime("%Y-%m-%d %H:%M:%S")

	print({color} + f"{stamp} - {msg}" + {RESET})
