import AdminLogin from "./AdminLogin";
import AdminChoose from "./AdminChoose";
import React from 'react';

export default class AdminPage extends React.Component {
    constructor(){
      super();
      this.state={
        move: false
        };

        this.handle = this.handle.bind(this);
    }
    handle(){
      this.setState({move: true})
    //   console.log(this.state.move)
    }
    render (){
      return (
        <div>
          {this.state.move === false && <AdminLogin move={this.state.move} func={this.handle}/> }
          {this.state.move === true && <AdminChoose/>}
        </div>
      );
    }
  }