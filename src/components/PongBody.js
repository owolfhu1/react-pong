import React from 'react';

const PongBody = props =>
    
    <div style={{
        height : '409px',
        width : '613px',
        margin : 'auto',
        marginTop : '10px',
        border : 'black solid 1px',
        position : 'relative',
        background : 'white',
        borderRadius : '5px',
    }}>
    
        <span style={{
            position : 'absolute',
            left : props.x + 2 + 'px',
            bottom : props.y - 4 + 'px'
        }}>
            <strong>●</strong>
        </span>
        
        <span style={{
            position : 'absolute',
            left : 0,
            bottom : props.left - 0 + 'px',
            height : '109px',
            width : '3px',
            background : 'black',
        }}/>
    
        <span style={{
            position : 'absolute',
            right : 0,
            bottom : props.right - 0 + 'px',
            height : '109px',
            width : '3px',
            background : 'black',
        }}/>
        
    </div>;

export default PongBody;