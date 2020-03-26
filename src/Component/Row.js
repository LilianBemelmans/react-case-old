import React, { Component } from 'react';

export default class Row extends Component{

  render () {

    var mailto = "mailto:" + this.props.data.email;
    var style = {
      backgroundColor: "#FFF",
      width: "100%",
      margin: 40,
      padding: 20
    }

    return(
      <React.Fragment>
        <div style={ style }>
        <span>Photo</span>
          <span>Naam</span>
          <span>E-mail</span>
          <span>Phone</span>
        </div>
      </React.Fragment>
    );
  }
}