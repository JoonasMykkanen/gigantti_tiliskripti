# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    pdf.py                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/03/05 12:32:18 by jmykkane          #+#    #+#              #
#    Updated: 2024/03/06 11:33:26 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from pdfrw import PdfReader
from pdfrw import PdfWriter
from pdfrw import PdfDict

# Custom imports
from ..utils.logger import ft_printf
from ..utils.constants import *

def create_pdf(data):
	"""
	- Creates pdf to print out after registering new account\n
	- All files are saved with receipt number as file name

	Parameters:\n
	data (Data): A data object containing customer info from frontend \n
	
	Returns:\n
	None but raises error if any errors would happen
	"""
	# TODO: figure out correct indexes for fields when real file is delivered
	try:
		reader = PdfReader("/app/src/template.pdf")
		fields = reader.pages[0]["/annots"]

		# email field
		fields[8].update(PdfDict(V=data.email))
		# password field
		fields[9].update(PdfDict(V=f"Eg{data.receipt}"))
		# check box

		writer = PdfWriter()
		filename = f"/output/{data.receipt}.pdf"
		writer.write(filename, reader)
	
	# TODO: more specific error handling
	except Exception as error_msg:
		ft_printf(f"500 Internal server error: {error_msg}", CRITICAL)
		# TODO: Raise some appropriate error

	