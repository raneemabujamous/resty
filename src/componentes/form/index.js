import React from "react";
import { useState } from "react";
import "./form.scss";
import axios from "axios";
function Form(props) {
  const [method, updateMethod] = useState("get");
  const [url, setUrl] = useState(
    "https://finalauthgropd.herokuapp.com/api/v1/stores"
  );
  const [showData, setshowData] = useState(false);
  const [updateText, setUpdated] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: method,
        url: url,
      });

      const formData = {
        method: method,
        url: url,
      };
      props.handleApiCall(formData, updateText, res.data);
      setshowData(false);
    } catch (e) {
      console.error(e);
    }
  };
  const handleupdateMethod = (e) => {
    updateMethod(e.target.id);
  };
  const handlesetshowData = (e) => {
    setshowData(true);
    updateMethod(e.target.id);
    console.log(e.target.id);
  };
  const handlesetUpdated = (e) => {
    setUpdated(e.target.value);
    console.log(e.target.value);
  };
  const handlesetUrl = (e) => {
    setUrl(e.target.value);
  };
  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handlesetUrl} />
        </label>
        <label className="methods">
          <input
            type="radio"
            name="btn"
            id="get"
            onClick={handleupdateMethod}
          />
          <span id="get">GET</span>

          <input
            type="radio"
            name="btn"
            id="post"
            onClick={handlesetshowData}
          />
          <span id="post">POST</span>

          <input type="radio" name="btn" id="put" onClick={handlesetshowData} />
          <span id="put">PUT</span>

          <input
            type="radio"
            name="btn"
            id="put"
            onClick={handleupdateMethod}
          />
          <span id="delete">DELETE</span>
        </label>
        <button data-testid="click" type="submit">
          GO!
        </button>
        {showData && (
          <textarea
            id="w3review"
            name="w3review"
            rows="10"
            cols="50"
            onChange={handlesetUpdated}
          />
        )}
      </form>
    </>
  );
}

export default Form;
