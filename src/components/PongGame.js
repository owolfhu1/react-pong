import React, {Component} from 'react';
import PongBody from "./PongBody";


export default class PongGame extends Component {
    
    constructor() {
        super();
        this.state = {
            left: 0,
            right: 0,
            x: 300,
            y: 200,
            direction : {
                x:Math.round((Math.random())) === 0 ? 2 : -2,
                y:Math.round((Math.random())) === 0 ? 1 : -1,
            },
        };
    }
    
    handleKeyPress(event) {
        if (event.key === 'ArrowUp') {
            if (this.state.right < 300)
                this.setState({right:this.state.right + 20});
        }
        if (event.key === 'ArrowDown') {
            if (this.state.right > 0)
                this.setState({right:this.state.right - 20});
        }
        if (event.key === 'w') {
            if (this.state.left < 300)
                this.setState({left:this.state.left + 20});
        }
        if (event.key === 'z') {
            if (this.state.left > 0)
                this.setState({left:this.state.left - 20});
        }
        if (event.key === 'Enter')
            setInterval(this.play,10);
    }
    
    play = () => {
        let direction = this.state.direction;
        let x = this.state.x + direction.x;
        let y = this.state.y + direction.y;
        let right = this.state.right;
        let left = this.state.left;
        if (y < 0) {
            direction.y = direction.y * -1;
            y = direction.y;
        } else if (y > 400) {
            direction.y = direction.y * -1;
            y = 400 + direction.y;
        }
        if (x < 0) {
            if (y < left - 4 || y > left + 100)
                direction = {x:0,y:0};
            else {
                let spot = y - left;
                direction.y = spot < 20 ? -2 : spot > 80 ? 2 : direction.y > 0 ? 1 : -1;
                direction.x = direction.x * -1;
            }
        }
        if (x > 600) {
            if (y < right - 4 || y > right + 100)
                direction = {x:0,y:0};
            else {
                let spot = y - right;
                direction.y = spot < 20 ? -2 : spot > 80 ? 2 : direction.y > 0 ? 1 : -1;
                direction.x = direction.x * -1;
            }
        }
        this.setState({direction,x,y});
    };
    
    render() {
        return <div tabIndex="0" style={{
            height : '430px',
            width : '630px',
            margin : 'auto',
            marginTop : '20px',
            border : 'black solid 1px',
            position : 'relative',
        }} onKeyDown={this.handleKeyPress.bind(this)}>
            <PongBody left={this.state.left} right={this.state.right}
                      x={this.state.x} y={this.state.y}/>
        </div>
    }
    
}