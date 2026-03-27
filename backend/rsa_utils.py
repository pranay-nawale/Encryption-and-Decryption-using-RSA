import rsa

# Generate keys
public_key, private_key = rsa.newkeys(512)

def encrypt_message(message):
    encrypted = rsa.encrypt(message.encode(), public_key)
    return encrypted.hex()

def decrypt_message(cipher_text):
    decrypted = rsa.decrypt(bytes.fromhex(cipher_text), private_key)
    return decrypted.decode()

def get_public_key():
    return {
        "n": public_key.n,
        "e": public_key.e
    }