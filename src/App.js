import React from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Form from "./componentes/form";
import Results from "./componentes/results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      // load: false,
    };
  }

  callApi = (formData, updateText, responseData) => {
    this.setState({
      data: responseData,
      requestParams: formData,
    });
    console.log("data after set", this.state.data);
  };

  // handleLoad(load) {
  //   this.setState({
  //     load: load,
  //   });
  // }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div data-testid="Method">
          Request Method: {this.state.requestParams.method}
        </div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleLoad={this.handleLoad} handleApiCall={this.callApi} />
        {/* {this.state.load ? (
          <BeatLoader load />
        ) : ( */}
        <Results data={this.state.data} />
        {/* )} */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
