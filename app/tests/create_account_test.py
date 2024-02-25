from fastapi.testclient import TestClient
from app import create_app  # replace with the actual import for your FastAPI application
import pytest

already_exists_playload = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "tester123987@gmail.com",
    "receipt": "1234567890"
}

@pytest.fixture(scope="module")
def test_client():
    app = create_app()
    client = TestClient(app)
    return client

@pytest.mark.asyncio
async def test_create_account(test_client):
    
    # Make a POST request to the /create_account route
    response = test_client.post("/create_account", json=already_exists_playload)

    # Check that the status code of the response is 200 (OK)
    assert response.status_code == 400

    # Optionally, check other aspects of the response
    # For example, if the response should include the created account's ID:
    # assert "id" in response.json()