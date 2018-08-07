import React, {Component} from 'react';
import PongBody from "./PongBody";


export default class PongGame extends Component {
    
    constructor() {
        super();
        this.state = {
            left: 150,
            right: 150,
            x: 300,
            y: 200,
            intervals : [],
        };
        
        this.direction = {
            x:Math.round((Math.random())) === 0 ? 2 : -2,
            y:Math.round((Math.random())) === 0 ? 1 : -1,
        };
        
    }
    
    stop = () => {
        for (let i in this.state.intervals)
            clearInterval(this.state.intervals[i]);
        this.setState({intervals:[]});
    };
    
    handleKeyPress = event => {
        
        let incrementBy = 20 + this.state.intervals.length * 3;
        incrementBy = incrementBy > 80 ? 80 : incrementBy;
        
        if (event.key === 'ArrowUp') {
            if (this.state.right < 300)
                this.setState({right:this.state.right + incrementBy});
        }
        if (event.key === 'ArrowDown') {
            if (this.state.right > 0)
                this.setState({right:this.state.right - incrementBy});
        }
        if (event.key === 'q') {
            if (this.state.left < 300)
                this.setState({left:this.state.left + incrementBy});
        }
        if (event.key === 'a') {
            if (this.state.left > 0)
                this.setState({left:this.state.left - incrementBy});
        }
        if (event.key === 'Enter')
            if(this.state.intervals.length === 0) {
                let intervals = this.state.intervals;
                intervals.push(setInterval(this.play, 40));
                this.setState({intervals});
            }
            else this.stop();
    };
    
    faster = () => {
        this.direction.x = this.direction.x * -1;
        let intervals = this.state.intervals;
        intervals.push(setInterval(this.play,80));
        this.setState({intervals});
    };
    
    play = () => {
        let direction = this.direction;
        let x = this.state.x + direction.x;
        let y = this.state.y + direction.y;
        let right = this.state.right;
        let left = this.state.left;
        right = right < 0 ? 0 : right > 300 ? 300 : right;
        left = left < 0 ? 0 : left > 300 ? 300 : left;
        if (y < 0) {
            direction.y = direction.y * -1;
            y = direction.y;
        } else if (y > 400) {
            direction.y = direction.y * -1;
            y = 400 + direction.y;
        }
        if (x < 0) {
            if (y < left - 4 || y > left + 100)
                this.stop();
            else {
                let spot = y - left;
                direction.y = spot < 20 ? -3 : spot > 80 ? 3 : direction.y > 0 ? 1 : -1;
                this.faster();
            }
        }
        if (x > 600) {
            if (y < right - 4 || y > right + 100)
                this.stop();
            else {
                let spot = y - right;
                direction.y = spot < 20 ? -3 : spot > 80 ? 3 : direction.y > 0 ? 1 : -1;
                this.faster();
            }
        }
        this.direction = direction;
        this.setState({x,y,right,left});
    };
    
    render() {
        return <div tabIndex="0" style={{
            height : '430px',
            width : '630px',
            margin : 'auto',
            marginTop : '20px',
            border : 'black solid 1px',
            position : 'relative',
            background : 'lightgray',
            borderRadius : '5px',
        }} onKeyDown={this.handleKeyPress.bind(this)}>
            <PongBody left={this.state.left} right={this.state.right}
                      x={this.state.x} y={this.state.y}/>
            <div style={{
                position : 'absolute',
                bottom : '175px',
                left : '307px',
            }}>
                <h1>{this.state.intervals.length}</h1>
            </div>
        </div>
    }
    
}