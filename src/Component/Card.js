import React, { Component } from 'react';

export default class Card extends Component{

  render () {
    var style = {
      backgroundColor: "#F0F",
      width: "25%",
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