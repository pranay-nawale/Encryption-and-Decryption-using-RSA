function ReceiverPanel({ encrypted }) {

  const decryptMessage = () => {

    const plain = atob(encrypted);

    alert("Decrypted Message: " + plain);
  };

  return (
    <div className="panel receiver">

      <h2>👤 Receiver</h2>

      <button onClick={decryptMessage}>
        Decrypt Message
      </button>

    </div>
  );
}

export default ReceiverPanel;
