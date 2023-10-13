import React from "react";
import { setValue, useState } from "react";

export function Task()
{
    var [value,setValue] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value.slice(event.target.value.length-1, event.target.value.length));
        if(event.target.value.slice(event.target.value.length-1, event.target.value.length)=="=")
        {
            setValue(Evaluate(value));
            return;
        }
        setValue(event.target.value);
    }

    return(
        <div class="myflex">
        <div class="grid2">
            <input class="screen border1" type="text" onChange={(event) => {handleChange(event)}} value={value}></input>
            <div class="flex3">
                <div class="my_grid">
                    <button id="btn-color" value="7" onClick={(event) => {setValue(value + event.target.value)}}>7</button>
                    <button id="btn-color" value="8" onClick={(event) => {setValue(value + event.target.value)}}>8</button>
                    <button id="btn-color" value="9" onClick={(event) => {setValue(value + event.target.value)}}>9</button>
                    <button id="btn-color" value="4" onClick={(event) => {setValue(value + event.target.value)}}>4</button>
                    <button id="btn-color" value="5" onClick={(event) => {setValue(value + event.target.value)}}>5</button>
                    <button id="btn-color" value="6" onClick={(event) => {setValue(value + event.target.value)}}>6</button>
                    <button id="btn-color" value="1" onClick={(event) => {setValue(value + event.target.value)}}>1</button>
                    <button id="btn-color" value="2" onClick={(event) => {setValue(value + event.target.value)}}>2</button>
                    <button id="btn-color" value="3" onClick={(event) => {setValue(value + event.target.value)}}>3</button>
                    <button id="btn-color" style={{borderBottomLeftRadius:"10px"}} onClick={(event) => {setValue(value + event.target.value)}}>0</button>
                    <button id="btn-color" value="." onClick={(event) => {setValue(value + event.target.value)}}>.</button>
                    <button id="btn-color" onClick={() => {setValue(Evaluate(value))}}>=</button>
                </div>
                <div class="flex2">
                    <button id="btn-color" onClick={() => {setValue(value.slice(0,-1))}}>CLR</button>
                    <button id="btn-color" value="/" onClick={(event) => {setValue(value + event.target.value)}}>/</button>
                    <button id="btn-color" value="*" onClick={(event) => {setValue(value + event.target.value)}}>x</button>
                    <button id="btn-color" value="-" onClick={(event) => {setValue(value + event.target.value)}}>-</button>
                    <button id="btn-color" style={{borderBottomRightRadius:"10px"}} value="+" onClick={(event) => {setValue(value + event.target.value)}}>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

function Evaluate(value)
{
    let val = [];
    let op = [];
    let char=value.charAt(0), num="", i=0;
    while(i<value.length)
    {
        while(char!="+" && char!="-" && char!="*" && char!="/" && i<value.length)
        {
            num = num + char;
            i++;
            if(i<value.length)
            {
                char = value.charAt(i);
            }
        }
        val.push(parseInt(num));
        num = "";
        if(char=="+" || char=="-" || char=="*" || char=="/")
        {
            op.push(char);
            i++;
            if(i<value.length)
            {
                char = value.charAt(i);
            }
        }
    }

    let total = val[0];
    let b;
    for(i=0; i<op.length; i++)
    {
        b = val[i+1]
        switch(op[i])
        {
            case '+':
                total += b;
                break;
            case '-':
                total -= b;
                break;
            case '/':
                total /= b;
                break;
            case '*':
                total *= b;
                break;
        }
    }
    return total.toString();
}