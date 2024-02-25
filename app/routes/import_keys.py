# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    import_keys.py                                     :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:42:37 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 18:55:05 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Will take a xmls file as input and parse it to the database
# File should contain product keys for the f-secure software
# Validation is minimal, as the file is assumed to be correct
# since this is an company internal tool

# Library imports
from fastapi import HTTPException
from peewee import IntegrityError
from fastapi import UploadFile
from fastapi import APIRouter

# Custom imports
from ..services.file_parser import parse_file
from ..services.database import save_keys
from ..utils.logger import ft_printf
from ..utils.constants import *
from ..utils.errors import *

router = APIRouter()

@router.post("/uploads", status_code=201)
async def upload_file(file: UploadFile):
	"""
	Uploading .xlsx files containing product keys for f-secure software

	Parameters:
	file (UploadFile): The file to upload.

	Returns:
	HTTP response indicating success or failure
	"""
	try:
		content = await file.read()
		data = await parse_file(content)
		save_keys(data)
		await ft_printf(f"201 Created: {len(data)} keys saved to database")
	
	except InvalidKeyError as error_msg:
		await ft_printf(f"400 Bad Request: {error_msg}", ERROR)
		raise HTTPException(status_code=400, detail=error_msg)
	
	except FileError as error_msg:
		await ft_printf(f"400 Bad Request: {error_msg}", ERROR)
		raise HTTPException(status_code=400, detail=error_msg)
	
	except KeySaveError as error_msg:
		await ft_printf(f"400 Bad Request: {error_msg}", ERROR)
		raise HTTPException(status_code=400, detail=error_msg)

	except Exception as error_msg:
		await ft_printf(f"/routes/import_keys/upload_file(): {error_msg}", ERROR)
		raise HTTPException(status_code=500, detail="Internal Server Error")