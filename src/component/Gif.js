import React, { Component } from "react";

class Gif extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {img} = this.props;
        return <div >
        <img src={img}></img>
      </div>
    }
}

export default Gif;
