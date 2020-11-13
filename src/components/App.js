import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state={time:new Date()};

    }
    render() {

        return(
            <>
               <div className="Clock">
                   <h3 id="time">{this.getTimeString()}</h3>
               </div>
            </>
        )
    }
    oneToTwoDigits(x)
    {
        return x<=9?`0${x}`:x; 
    }
    getTimeString()
    {
        const currrentHour=this.state.time.getHours();
        const hourWith12format=currrentHour>12?currrentHour-12:currrentHour;
        let AmOrPm =currrentHour>=12?'PM':'AM';
        let currentMinutes=this.state.time.getMinutes();
        let currentSec=this.state.time.getSeconds();
   
        return `${this.oneToTwoDigits(hourWith12format)}:${this.oneToTwoDigits(currentMinutes)}:${this.oneToTwoDigits(currentSec)} ${AmOrPm}`;

    }
    componentDidMount()
    {
        this.IntervalId=setInterval(()=>{
            this.setState({time:new Date()});
        },1000)
    }
    componentWillUnmount()
    {
        clearInterval(this.IntervalId);
    }
}


export default App;
