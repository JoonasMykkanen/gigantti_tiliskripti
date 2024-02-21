# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    index.py                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:45:02 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/21 11:42:05 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# This route will be called at each start of program to check for database status
# and other necessary things that the program needs to work correctly
# it will return error codes if something is wrong to inform user about the problem

from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_index():
	# TODO: check key amount in database and redirect if too low

	return {"status": "ok"}