import { useState } from "react";
import SenderPanel from "./SenderPanel";
import NetworkPanel from "./NetworkPanel";
import ReceiverPanel from "./ReceivePanel";
import "./rsa.css";

function RSAChat() {

  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  return (
    <div className="container">

      <h1>🔐 RSA Secure Chat Visualization</h1>

      <div className="chat-grid">

        <SenderPanel setEncrypted={setEncrypted}/>
        <NetworkPanel encrypted={encrypted}/>
        <ReceiverPanel encrypted={encrypted} setDecrypted={setDecrypted}/>

      </div>

    </div>
  );
}

export default RSAChat;