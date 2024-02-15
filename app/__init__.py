# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    __init__.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 07:49:07 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/15 08:48:32 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi import FastAPI

# Custom imports
from app.routes import index

# Has all configurations and setting up the backend
# RETURN: instance of fastapi APP
def create_app():
	app = FastAPI()

	# Importing config and env variables

	# Specifying individual endpoints
	app.include_router(index.router)

	return app