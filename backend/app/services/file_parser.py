# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    file_parser.py                                     :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 09:08:19 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 09:58:25 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Parses input file from /api/uploads

# Library imports
from io import BytesIO
import pandas as pd
import re

# Custom imports
from ..utils.constants import *
from ..utils.errors import *

def validate_key(key):
	"""
	Will check correct syntax for key found in the file
	Correct syntax: XXXX-XXXX-XXXX-XXXX
	Accepted values ASCII 45 & 48-57 & 65-90

	Parameters:
	(str): product key to check

	Returns:
	bool: True if key is valid, False otherwise.
	"""
	pattern = r'^([A-Z0-9]{5}-){3}[A-Z0-9]{5}$'
	match = re.fullmatch(pattern, key)
	return match is not None


def parse_file(contents):
	"""
	Parsing user given input file to be pushed into database.

	Parameters:
	contents (bytes): contents of the uploaded file

	Returns:
	bool: True if parsing was succesful, False otherwise.
	"""
	df = pd.read_excel(BytesIO(contents))
	mask = df.where(df == EXCEL_PRODUCT_KEY)
	row, col = mask.stack().index.tolist()[0]

	list = []
	while True:
		try:
			row += 1
			cell_value = df.loc[row, col]
			if not validate_key(EXCEL_PRODUCT_KEY):
				raise InvalidKeyError()
			list.append(cell_value)
		
		except InvalidKeyError:
			raise InvalidKeyError(f"Invalid product_key found at row: {row} col: {col}")
		
		except Exception:
			break
	
	if list:
		return list
	else:
		raise FileError("Zero (0) product keys found")
