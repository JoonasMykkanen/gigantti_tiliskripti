from fastapi.testclient import TestClient
from app import create_app  # replace with the actual import for your FastAPI application
import pytest

app = create_app()
client = TestClient(app)

@pytest.mark.asyncio
async def test_create_account():
    # Define a sample payload based on the Data model
    payload = {
        "first_name": "John",
        "last_name": "Doe",
        "email": "testitesterson@gmail.com",
        "receipt": "1234567890"
    }

    # Make a POST request to the /create_account route
    response = client.post("/create_account", json=payload)
    
    print(response)

    # Check that the status code of the response is 200 (OK)
    # assert response.status_code == 200

    # Optionally, check other aspects of the response
    # For example, if the response should include the created account's ID:
    # assert "id" in response.json()