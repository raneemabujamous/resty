import React from "react";

function History({ history, handleApiCall }) {
  return (
    <div className="history">
      <h2 className="h2">History</h2>
      <ul>
        {history &&
          history.map((item, idx) => {
            return (
              <li>
                <b> Method :{item.method}</b>
                <br />
                URL: {item.url}
                <br />
                <b className="showresult" onClick={() => handleApiCall(item)}>
                  {" "}
                  show result
                </b>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default History;
