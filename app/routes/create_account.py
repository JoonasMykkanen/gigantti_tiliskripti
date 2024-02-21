# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    create_account.py                                  :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:59:46 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/21 22:26:55 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #


# Library imports
from pydantic import BaseModel
from fastapi import APIRouter

# Custom imports
from ..services.database import get_product_key
from ..services.f_secure import create_account
from ..utils.constants import *

class Data(BaseModel):
	first_name: str
	last_name: str
	email: str
	receipt: str

router = APIRouter()

@router.post("/create_account")
async def handle_account(data: Data):
	"""
	Takes form from the frontend and uses information to create new account

	Parameters:

	Returns:
	"""
	try:
		# key = await get_product_key()
		await create_account(data)
		return 200
	except Exception as e:
		print(f"Exception caught: {e}")
		return 500