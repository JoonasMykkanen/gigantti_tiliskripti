# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    middleware.py                                      :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/25 12:28:38 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 12:32:56 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi import Request

# Custom imports
from .utils.logger import ft_printf
from .utils.constants import INFO

async def logger_middleware(request: Request, call_next):
	"""
	Middleware: Will take in each request and print essential information out
	"""
	ft_printf(f"{request.method} {request.url.path}", INFO)
	response = await call_next(request)