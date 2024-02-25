# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    database.py                                        :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/16 07:54:05 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 10:06:09 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Library imports
from peewee import *

# Custom imports
from ..utils.logger import ft_printf
from ..utils.constants import *
from ..utils.errors import *
from ..db import *

# ------------ PRODUCT KEY FUNCTIONS -------------- #

def delete_key(key):
	"""

	Parameters:
	key (Keys instance): entry of keys table

	Returns:
	None
	"""
	try:
		key.delete_instance()
	except Exception as e:
		raise KeyDeleteError(f"Could not delete key from db: {e}")


def save_keys(keys):
	"""
	Will save each key into db from input list

	Parameters:
	keys (list): List that contains product_keys (str)

	Returns:
	None
	"""
	try:
		for key in keys:
			Keys.create(value=key)
	except Exception as e:
		raise KeySaveError(f"Could not save keys in db: {e}")


# TODO: not urgent
def get_key_count(entry):
	"""
	Deletes given instance

	Parameter:
	entry (Keys object) entry from database Keys table

	Returns:
	None
	"""
	pass
	# try:
	# 	entry.delete_instance()
	# except Exception as e:
	# 	raise KeyGetError("")


def get_product_key():
	"""
	Get first avaivable entry from db

	Parameters:
	None

	Returns:
	Keys: instance of Keys model
	"""
	try:
		entry = Keys.get()
		return entry
	except Keys.DoesNotExist:
		raise NoKeyError(f"No keys found in database: {e}")
	except Exception as e:
		raise RuntimeError(f"/services/database.py/get_product_key(): {e}")
	