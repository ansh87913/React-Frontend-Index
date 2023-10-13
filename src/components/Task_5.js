import React from "react";
import { Component } from "react";

export class Task extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {age:0, date:0, toggle:false}
    }

    handleChange = (event) => {
        this.setState({
            date: event.target.value,
            toggle: false
        })
    }

    handleClick = () => {
        var str = this.state.date.toString();
        var year = str.slice(0,4);
        var month = str.slice(5,7);
        var date = str.slice(8,10);
        var my_age=0;
        var obj = new Date();
        var cur_date = obj.getDate();
        var cur_month = obj.getMonth();
        var cur_year = obj.getFullYear();
        console.log(date)
        console.log(month)
        console.log(year)
        if(year<cur_year-1)
        {
            if((date<=cur_date && month==cur_month) || (month<=cur_month))
            {
                my_age += my_age+(cur_year-year);
            }
            else{
                my_age += my_age+(cur_year-year-1);
            }
        }
        else if(year==cur_year-1)
        {
            if(date<=cur_date && month<=cur_month)
            {
                my_age += 1;
            }
        }

        this.setState({
            toggle: true,
            age: my_age
        })
    }

    render(){
        return(
            <div class="myflex">
                <h2>Age Calculator</h2>
                <h6>Enter your date of birth</h6>
                <input type="date" onChange={this.handleChange} class="px-5"></input>
                <button onClick={this.handleClick} class="button bg-primary custom px-3 my-2">Calculate Age</button>
                {(this.state.toggle)?<h4>You are {this.state.age} years old </h4>:<p></p>}
            </div>
        )
    }
}