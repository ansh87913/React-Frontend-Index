import {Component} from "react";
import "../App.css"

export class Task extends Component{
    constructor(props)
    {
        super(props);
        this.state = {toggle:false}
    }

    handleButtons = (col_arr) => {
        return(
            col_arr.map((val) => {
                return <button class={val}  id="btn_size" onClick={() => {this.handleClick2(val)}}></button>
            })
        )
    }

    handleClick1 = () => {
        this.setState({
            toggle: true
        })
    }

    handleClick2 = (val) => {
        this.setState({
            toggle: false,
            background: val
        });
        console.log(val);
        document.body.className = val;
    }

    render()
    {
        return(
            <div>
                {(this.state.toggle)? 
                    <div class="myflex">
                        {this.handleButtons(this.props.col_arr)}
                    </div>:<p></p>
                }

                <button class="my_btn px-3 py-1" onClick={this.handleClick1}>Pick a color</button>
            </div>
        )
    }
}
