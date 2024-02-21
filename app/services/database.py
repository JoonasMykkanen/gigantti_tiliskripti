# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    database.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/16 07:54:05 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/21 17:47:04 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from peewee import *

# Custom imports
from ..db import *

# ------------ PRODUCT KEY FUNCTIONS -------------- #

# TODO: not urgent
def delete_key(key):
	pass

def save_keys(keys):
	"""
	Will save each key into db from input list

	Parameters:
	keys (list): List that contains product_keys (str)

	Returns: None but Raises error if occured
	"""
	for key in keys:
		Keys.create(value=key)

# TODO: not urgent
def get_key_count():
	pass


def get_product_key():
	"""
	Get first avaivable entry from db

	Parameters:
	None

	Returns: Keys: instance of Keys model
	"""
	try:
		entry = Keys.get()
		return entry
	
	except Keys.DoesNotExist:
		raise ValueError("No keys found in database.")
	