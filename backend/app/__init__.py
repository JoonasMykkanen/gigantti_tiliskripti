# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    __init__.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 07:49:07 by jmykkane          #+#    #+#              #
#    Updated: 2024/03/22 05:14:33 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from pydantic import ValidationError
from fastapi import FastAPI

# Custom imports
from app.exception_handler import validation_exception_handler
from app.middleware import logger_middleware
from app.routes import register_fsec
from app.routes import import_keys
from app.utils.constants import *
from app.routes import index

def create_app():
	"""
	Creates app and its configurations

	Parameters:
	None

	Returns:
	Object: FastApi app instance
	"""
	app = FastAPI()

	# Importing config and env variables

	# Custom exception handlers
	app.add_exception_handler(RequestValidationError, validation_exception_handler)

	# Taking middlewares to use
	app.middleware("http")(logger_middleware)
	app.add_middleware(
		CORSMiddleware,
		allow_origins=[FRONTEND],
		allow_methods=[GET, POST],
		allow_headers=["*"],
	)

	# Specifying individual endpoints
	app.include_router(index.router)
	app.include_router(register_fsec.router)
	app.include_router(import_keys.router)

	return app