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
          <img class="rounded-circle" alt="Photo" src=""></img>
          <h4>Naam</h4>
          <div>E-mail</div>
          <div>Phone</div>
        </div>
      </React.Fragment>
    );
  }
}