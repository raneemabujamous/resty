import React from "react";
import { useState, useEffect } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Form from "./componentes/form";
import Results from "./componentes/results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});

  async function callApi(requestParams) {
    setRequest(requestParams);
  }
  useEffect(() => {
    fetch(requestParams.url)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("is updated");
    return () => {
      console.log("cleanup");
    };
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div data-testid="Method">Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
