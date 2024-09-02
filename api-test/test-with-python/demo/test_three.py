import requests

def test_two_method(request):
    base_url="http://localhost:5000/post_endpoint"
    body={"name":"taoli"}
    response = requests.post(base_url,body)
    request.node.request = response.request
    request.node.response=response
    assert response.status_code == 200
    assert response.json()["address"]["one"]["city"] == "chengdu"