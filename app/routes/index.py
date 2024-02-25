# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    index.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:45:02 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 22:05:04 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# This route will be called at each start of program to check for database status
# and other necessary things that the program needs to work correctly
# it will return error codes if something is wrong to inform user about the problem

# Library imports
from fastapi import APIRouter

# Custom imports
from ..utils.logger import ft_printf
from ..utils.constants import *

router = APIRouter()

@router.get("/")
async def get_index():
	
	# TODO: check key amount in database and redirect if too low
	# TODO: error check

	await ft_printf("200 OK: index.html sent", SUCCESS)
	return {"status": "ok"}