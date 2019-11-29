import React from 'react';

const charComponent = (props) => {
    return (
    <div onClick={props.clicked}>
        <p>{props.character}</p>
    </div>
    )
}

export default charComponent;