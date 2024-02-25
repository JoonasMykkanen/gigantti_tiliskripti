# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    __init__.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 07:49:07 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 12:34:12 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi import FastAPI

# Custom imports
from app.middleware import logger_middleware
from app.routes import create_account
from app.routes import import_keys
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

	# Specifying individual endpoints
	app.include_router(index.router)
	app.include_router(create_account.router)
	app.include_router(import_keys.router)

	# Taking middleware to use
	app.middleware("http")(logger_middleware)

	return app