import React from 'react';

const Button = () => {
    return (
        <button onClick={() => document.location.reload(true)} style={{marginBottom: '20px', margin: '8px'}}>New game</button>
    )
}


export default (Button);
