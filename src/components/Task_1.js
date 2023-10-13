import React, { Component } from "react";
import '../App.css';

export class Task extends Component{
    constructor(props){
        super(props);
        this.state = {length: 0, charlen: 0}
    }
    onChange = (event) => {
        if(event.target.value.length==1)
        {
            this.setState({
                length: 1
            })
        }
        let last = (event.target.value.length) - 1
        if(event.target.value.length<this.state.charlen)
        {
            if(event.target.value.charAt(last)==" ")
            {
                this.setState({
                    length : this.state.length-1
                })
            }
            if(event.target.value.length==0)
            {
                this.setState({
                    length: 0
                })
            }
        }
        else if(event.target.value.charAt(last)==" ")
        {
            this.setState({
                length : this.state.length+1
            })
        }
        this.setState({
            charlen: event.target.value.length
        })
    }
    render(){
        return(
            <div class="myflex">
                <h2 style={{textAlign:"center"}}>Responsive Paragraph Word<br></br> Counter</h2>
                <input type="text" onChange={this.onChange} style={{width:"400px", paddingBottom:"100px"}}></input>
                <p class="pt-4">Word Count: {this.state.length}</p>
            </div>
        )
    }
}