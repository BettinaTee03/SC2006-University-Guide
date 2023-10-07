import React, { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {};

    fetchMessage();
  }, []);

  return <>nothing here for now</>;
}

export default Home;
