from fastapi.testclient import TestClient
from app import create_app  # replace with the actual import for your FastAPI application
import pytest

already_exists_playload = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "tester123987@gmail.com",
    "receipt": "1234567890",
	"send_email": "false",
	"send_print": "true",
}

bad_payload_1 = {
    "wrong_field": "ville",
    "another": "kalle",
}

valid_payload = {
	"first_name": "John",
    "last_name": "Doe",
    "email": "t111estdddoutlook@gmail.com",
    "receipt": "1234567890",
	"send_email": "false",
	"send_print": "true",
}

@pytest.fixture(scope="module")
def test_client():
    app = create_app()
    client = TestClient(app)
    return client


# @pytest.mark.asyncio
# async def test_already_exists(test_client):
#     response = test_client.post("/register", json=already_exists_playload)
#     assert response.status_code == 400


# @pytest.mark.asyncio
# async def test_bad_input(test_client):
#     response = test_client.post("/register", json=bad_payload_1)
#     assert response.status_code == 422
    
@pytest.mark.asyncio
async def test_valid(test_client):
    response = test_client.post("/register", json=valid_payload)
    assert response.status_code == 201