# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Errors.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/24 16:44:35 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 09:38:19 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# This file contains all custom Exceptions that are used
# To track programs state and return correct responses

class NoKeyError(Exception):
	"""
	Indicates that there were no keys avaivable in the database
	"""
	def __init__(self, message=None):
		super().__init__(message)



class EmailUsedError(Exception):
	"""
	Indicates that f-secure server returned with error that email is already registered
	"""
	def __init__(self, message=None):
		super().__init__(message)



class ExternalTimeOutError(Exception):
	"""
	Indicates that request to external api timed out
	"""
	def __init__(self, message=None):
		super().__init__(message)



class KeyDeleteError(Exception):
	"""
	Indicates that peewee had problems deleting key from database\n
	does not require action from user but should be handled by admin
	"""
	def __init__(self, message=None):
		super().__init__(message)



class KeyGetError(Exception):
	"""
	Indicates that peewee had problems getting key from database\n
	does not require action from user but should be handled by admin
	"""
	def __init__(self, message=None):
		super().__init__(message)



class KeySaveError(Exception):
	"""
	Indicates that peewee had problems saving keys to the database
	"""
	def __init__(self, message=None):
		super().__init__(message)



class InvalidKeyError(Exception):
	"""
	Indicates that parser found invalid product key from input file
	"""
	def __init__(self, message=None):
		super().__init__(message)



class UsedKeyError(Exception):
	"""
	Indicates that /sercices/f-secure found already used key from database... Should not happen
	"""
	def __init__(self, message=None):
		super().__init__(message)


class FileError(Exception):
	"""
	Indicates that parser could not find any keys from input file
	"""
	def __init__(self, message=None):
		super().__init__(message)