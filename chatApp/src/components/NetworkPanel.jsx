function NetworkPanel({ encrypted }) {

  return (
    <div className="panel network">

      <h2>🌐 Encrypted Network</h2>

      <p className="cipher">
        {encrypted || "Encrypted message will appear here"}
      </p>

    </div>
  );
}

export default NetworkPanel;
