import React from 'react';

const userInput = (props) => {
    return (
        <div className="userInput">
            <input onChange={props.change} type="text" value={props.username} />
        </div>
    )
};


export default userInput;