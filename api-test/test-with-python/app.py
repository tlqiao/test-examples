from flask import Flask, request, jsonify
from flask_cors import CORS  # 仅在需要解决 CORS 问题时使用

app = Flask(__name__)
CORS(app)  # 仅在需要解决 CORS 问题时使用

@app.route('/firstapi', methods=['POST'])
def post_endpoint():
    if request.is_json:  # 确保请求体是 JSON 格式
        data = request.get_json()  # 获取 POST 请求的 JSON 数据
        
        # 从请求体中获取名字
        name = data.get('name', 'unknown')  # 获取 name 字段，默认值为 'unknown'
    
        # 构造响应数据
        response_data = {
            "address": {
                "one": {
                    "city": "chengdu",
                    "phone": "123456"
                },
                "two": {
                    "city": "beijing",
                    "phone": "123456"
                }
            },
            "received_name": name  # 将请求体中的名字包含在响应中
        }
    
        # 返回 JSON 响应
        return jsonify(response_data)
    else:
        return jsonify({"error": "Request must be JSON"}), 400  # 如果请求不是 JSON，返回 400 错误

if __name__ == '__main__':
    app.run(debug=True)
