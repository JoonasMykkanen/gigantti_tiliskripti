# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    create_account.py                                  :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:59:46 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/24 22:52:20 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from fastapi.responses import RedirectResponse
from fastapi.exceptions import HTTPException
from pydantic import BaseModel
from fastapi import APIRouter

# Custom imports
from ..services.database import get_product_key
from ..services.f_secure import create_account
from ..utils.logger import ft_printf
from ..utils.constants import *
from ..utils.errors import *

# Will contain everything needed for account creation
class Data(BaseModel):
	first_name: str
	last_name: str
	email: str
	receipt: str

router = APIRouter()

@router.post("/create_account", status_code=200)
async def handle_account(data: Data):
	"""
	Takes form from the frontend and uses information to create new account

	Parameters:
	data (Data): A data object containing customer info from frontend

	Returns:
	HTTP response with status and message:\n
	201 Created\n
	400 Bad request\n
	500 Internal server error\n
	"""
	try:
		key = await get_product_key()
		await ft_printf(str(key), INFO)
		await create_account(data, key)

	except NoKeyError as error_msg:
		await ft_printf(error_msg, WARNING)
		return RedirectResponse(url="/uploads")
	
	except EmailUsedError:
		await ft_printf(f"User email {data.email} is already in use.", WARNING)
		raise HTTPException(status_code=400, detail=error_msg)
	
	except ExternalTimeOutError as error_msg:
		await ft_printf(f"External api timed out, check status for key: {key}", ERROR)
		raise HTTPException(status_code=408, detail=error_msg)
	
	except Exception as error_msg:
		ft_printf(f"Exception caught: {error_msg}", CRITICAL)
		raise HTTPException(status_code=500, detail=error_msg)