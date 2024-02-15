# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    importKeys.py                                      :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 08:42:37 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/15 09:02:43 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Will take a xmls file as input and parse it to the database
# File should contain product keys for the f-secure software
# Validation is minimal, as the file is assumed to be correct
# since this is an company internal tool

# Library imports
from fastapi import APIRouter

# Custom imports

router = APIRouter()

