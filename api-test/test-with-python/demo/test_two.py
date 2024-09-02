import pytest
import requests

@pytest.mark.parametrize("email,password",[("test@163.com","123456"),("one@163.com","123456")])
def test_post_method(email,password,request):
    base_url="https://conduit.productionready.io/api/users/login"
    body={"user":{"email":email,"password":password}}
    response =requests.post(base_url,body)
    request.node.request = response.request
    request.node.response = response
    assert response.status_code == 200
    # assert response.json()["title"] == "one"

