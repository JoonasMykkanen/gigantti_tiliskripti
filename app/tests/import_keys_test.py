# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    import_keys_test.py                                :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/02/15 17:33:58 by jmykkane          #+#    #+#              #
#    Updated: 2024/02/18 12:59:28 by jmykkane         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

import pytest
from fastapi.testclient import TestClient
from app import create_app  # replace with the actual location of your FastAPI app
import io

app = create_app()
client = TestClient(app)

def test_upload_file():
    file_name = "./app/tests/valid.xlsx"
    data = {"file": (file_name, open(file_name, "rb"))}

    response = client.post("/uploads", files=data)

    assert response.status_code == 201
    assert response.json() == {"message": "File uploaded successfully."}