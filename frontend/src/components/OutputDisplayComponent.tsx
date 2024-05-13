import React, { useState, useEffect } from "react";

function OutputDisplayComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>{message ? message : "Loading..."}</div>;
}

export default OutputDisplayComponent;
