# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    exception_handler.py                               :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/25 16:50:24 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 18:34:55 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import ValidationError
from fastapi import Request

# Custom imports
from .utils.constants import WARNING
from .utils.logger import ft_printf

async def validation_exception_handler(request: Request, exc: RequestValidationError):
	"""
	Overrides fastapis behaviour where if validation error occurs,
	it will not get into middlewares or routers at all. 
	Now return will get logged.
	"""
	await ft_printf(f"422 Validation error", WARNING)

	return JSONResponse(
		status_code=422,
		content={"detail": exc.errors()},
	)