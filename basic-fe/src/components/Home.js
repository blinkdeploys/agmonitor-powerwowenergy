import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import {SelectFile} from "./SelectFile";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileChoices: [],
      currentSelectedFile: null,
    };

    this.selectFile = (event) => {
      let newChoice = event.target.value;
      this.setState({...this.state, currentSelectedFile: newChoice});
      // TODO: replace this alert with code to load and show data
      alert("selecting new file: " + newChoice);
    }
    this.selectFile = this.selectFile.bind(this);
  }

  componentDidMount() {
    this.resetState();
  }

  getFileChoices = () => {
    axios.get(API_URL + "files").then(res =>
        this.setState({ ...this.state, fileChoices: res.data.files }));
  };

  resetState = () => {
    this.getFileChoices();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row><Col><SelectFile fileChoices={this.state.fileChoices}
                              currentSelection={this.state.currentSelectedFile}
                              onSelect={this.selectFile}/></Col>

        </Row>

      </Container>
    );
  }
}

export default Home;
