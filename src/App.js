import React from "react";
import { useState, useEffect, useReducer } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Form from "./componentes/form";
import Results from "./componentes/results";
import History from "./componentes/History";
const initialState = {
  requests: [],
};
function historyReducer(state = initialState, action) {
  //action it pass to dispatch function
  const { type, payload } = action; //payload have all variable and data in the method
  console.log(payload, "paylo");
  switch (type) {
    case "addSearch":
      const requests = [...state.requests, payload];
      console.log(requests);
      return { requests };
    default:
      return state;
  }
}
function addSearch(requestParams, data) {
  return {
    type: "addSearch",
    payload: {
      url: requestParams.url,
      method: requestParams.method,
      result: data,
    },
  };
}
function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [data, setData] = useState(null);
  const [requestParams, setRequest] = useState({});

  async function callApi(requestParams) {
    setRequest(requestParams);
  }
  useEffect(() => {
    fetch(requestParams.url)
      .then((res) => res.json())
      .then((data) =>
        setTimeout(() => {
          setData(data);
          dispatch(addSearch(requestParams, data)); // its call to update our state // when we call it take value from our reducer function
        }, 1000)
      );

    console.log(data, "is updated");
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
      <History handleApiCall={callApi} history={state.requests} />
      <Results data={data} />

      <Footer />
    </React.Fragment>
  );
}

export default App;
