from flask import Flask, request, jsonify
from flask_cors import CORS
from rsa_utils import decrypt_message, get_public_key

app = Flask(__name__)
CORS(app)

messages = []

@app.route("/")
def home():
    return "RSA Secure Chat Backend Running"

# send public key to frontend
@app.route("/public-key")
def public_key():
    return jsonify(get_public_key())

# receive encrypted message
@app.route("/send", methods=["POST"])
def send_message():

    data = request.json
    encrypted_msg = data["message"]

    decrypted = decrypt_message(encrypted_msg)

    messages.append({
        "encrypted": encrypted_msg,
        "decrypted": decrypted
    })

    return jsonify({"status": "Message received"})

# get all messages
@app.route("/messages")
def get_messages():
    return jsonify(messages)


if __name__ == "__main__":
    app.run(debug=True)