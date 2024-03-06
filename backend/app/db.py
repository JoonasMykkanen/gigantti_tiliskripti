# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    db.py                                              :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:32:00 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/25 09:15:53 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# ARCHITECTURE NOTE: Will be ran by each store locally instead centralized server
# Makes it easier to comply with privacy concerns, less validation, no need for
# big centralized database to connect stores and their individual tables

# Library imports
from peewee import SqliteDatabase
from peewee import DateTimeField
from peewee import BooleanField
from peewee import TextField
from peewee import Model

# Custom imports
from .utils.timestamp import get_timestamp

# Creating database if does not exist
db = SqliteDatabase('database.db')


# Each table has BaseModel with reference to db object
class BaseModel(Model):
	timestamp = DateTimeField(index=True, default=get_timestamp)
	
	class Meta:
		database = db
		order_by = ('timestamp',)


# Table to hold product keys in
class Keys(BaseModel):
	value = TextField(unique=True)


# Table to hold each runs status inside
class Logs(BaseModel):
	status = BooleanField()
	message = TextField()
	receipt = TextField()


db.connect()
db.create_tables([
	Keys,
	Logs
])