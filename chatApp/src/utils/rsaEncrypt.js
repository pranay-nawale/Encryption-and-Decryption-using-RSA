import NodeRSA from "node-rsa";

export function encryptMessage(message, n, e) {

  const key = new NodeRSA();
  
  key.importKey({
    n: Buffer.from(n.toString(16), "hex"),
    e: e,
  }, "components-public");

  return key.encrypt(message, "hex");
}