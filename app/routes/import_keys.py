# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    import_keys.py                                     :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:42:37 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/24 15:13:17 by jmykkane         ###   ########.fr        #
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
	
	except IntegrityError:
		await ft_printf("Key already existed in database, abort!", WARNING)
		raise HTTPException(status_code=400, detail="A key in the list already exists in the database.")
	except IndexError as e:
		await ft_printf(f"Invalid file: {e}", WARNING)
		raise HTTPException(status_code=400, detail=f"Invalid file: {e}")
	except ValueError as e:
		await ft_printf(f"Invalid file: {e}", WARNING)
		raise HTTPException(status_code=400, detail=f"Invalid file: {e}")
	except KeyError as e:
		await ft_printf(f"Invalid file: {e}", WARNING)
		raise HTTPException(status_code=400, detail=f"Error with file contents: {e}")
	except Exception as e:
		await ft_printf(f"Invalid file: {e}", ERROR)
		raise HTTPException(status_code=500, detail=f"Internal server error")