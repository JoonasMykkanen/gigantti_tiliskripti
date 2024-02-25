# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    constants.py                                       :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 07:56:40 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 16:30:36 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Includes all possible global constants

# /services/file_parser
EXCEL_PRODUCT_KEY = "Coupon code"
EXCEL_INSTALL_LINK = "Direct installation link"

# /utils/timestamp
CURRENT_TIMEZONE = "Europe/Helsinki"

# /utils/logger
DEBUG = 1
INFO = 2
WARNING = 3
ERROR = 4
CRITICAL = 5

# Colors
WHITE = "\033[97m"
RED = "\033[91m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
BLUE = "\033[94m"
MAGENTA = "\033[95m"
CYAN = "\033[96m"
RESET = "\033[0m"

# /services/create_account
REGISTER_API = "https://accounts-emea.f-secure.com/OneID/portal/ui/register"
AUTH_API = "https://api.my.f-secure.com/auth/check-oneid/"
REGISTER_URL = "https://my.f-secure.com/register/gigantti/"
EMAIL_USED = "This email address is already in use."


# GENERAL
FRONTEND = "http://localhost:9898"
POST = "POST"
GET = "GET"