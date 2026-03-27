import { useState } from "react";

function SenderPanel({ setEncrypted }) {

  const [message,setMessage] = useState("");

  const encryptMessage = () => {

    const cipher = btoa(message); // simple demo encryption

    setEncrypted(cipher);
  };

  return (
    <div className="panel sender">

      <h2>👤 Sender</h2>

      <textarea
      placeholder="Enter message"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />

      <button onClick={encryptMessage}>
        Encrypt Message
      </button>

    </div>
  );
}

export default SenderPanel;