# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    run.py                                             :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 07:44:04 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/15 08:57:02 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from app import create_app
import uvicorn

app = create_app()

if __name__ == '__main__':
	uvicorn.run(app, host='0.0.0.0', port=8080)