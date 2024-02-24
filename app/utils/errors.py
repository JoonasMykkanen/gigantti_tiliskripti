# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Errors.py                                          :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/24 16:44:35 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/24 22:53:13 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# This file contains all custom Exceptions that are used
# To track programs state and return correct responses

class NoKeyError(Exception):
	"""
	Indicates that there were no keys avaivable in the database
	"""
	pass



class EmailUsedError(Exception):
	"""
	Indicates that f-secure server returned with error that email is already registered
	"""
	pass



class ExternalTimeOutError(Exception):
	"""
	Indicates that request to external api timed out
	"""
	pass



class KeyDeleteError(Exception):
	"""
	Indicates that peewee had problems deleting key from database\n
	does not require action from user but should be handled by admin
	"""
	pass



class KeyGetError(Exception):
	"""
	Indicates that peewee had problems getting key from database\n
	does not require action from user but should be handled by admin
	"""
	pass



class KeySaveError(Exception):
	"""
	Indicates that peewee had problems saving keys to the database
	"""
	pass