import axios from 'axios';
import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          user: [],
        };
      }
    
      componentWilMount() {
        axios('https://randomuser.me/api/').then(response => console.log(response));
      }
  render() {
    return (
     <div>
         
     </div>
    )
  }
}
