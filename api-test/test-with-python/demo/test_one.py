import pytest
import requests


def test():
    try:
        result =10/0
    except Exception as e:
        print(f"The error is {e}")

@pytest.fixture(autouse=True)
def capture_request_response(request):
    def fin():
        if hasattr(request.node, 'request') and hasattr(request.node, 'response'):
            print("\n--- Request and Response details ---")
            print(f"Request URL: {request.node.request.url}")
            print(f"Request method: {request.node.request.method}")
            print(f"Request headers: {request.node.request.headers}")
            if request.node.request.body:
                print(f"Request body: {request.node.request.body}")
            print(f"Response status code: {request.node.response.status_code}")
            print(f"Response content: {request.node.response.text}")

    request.addfinalizer(fin)

@pytest.mark.parametrize("input,expected", [(1, 2), (3, 4), (5, 6)])
def test_add_one(input, expected):
    assert input + 1 == expected


@pytest.mark.parametrize("email,password",[("test@163.com","123456"),("one@163.com","123456")])
def test_post_method(email,password,request):
    base_url="https://conduit.productionready.io/api/users/login"
    body={"user":{"email":email,"password":password}}
    response =requests.post(base_url,body)
    request.node.request = response.request
    request.node.response = response
    assert response.status_code == 200
    # assert response.json()["title"] == "one"
    
