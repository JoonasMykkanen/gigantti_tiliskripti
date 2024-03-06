# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    timestamp.py                                       :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/16 07:37:50 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/18 12:51:12 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from datetime import datetime
import pytz

# Custom imports
from .constants import CURRENT_TIMEZONE

def get_timestamp():
	"""
	Will get current time stamp in GMT+2 (Helsinki)

	Parameters:
	None

	Returns:
	datetime: Aware datetime object
	"""
	timezone = pytz.timezone(CURRENT_TIMEZONE)
	time = datetime.now(timezone)

	return time