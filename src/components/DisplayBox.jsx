import React from 'react';

const DisplayBox = (props) => {
    const {color, size, idx, isSelected, toggleBox, pardonBox} = props;
    return(
        <div>
            <div style= {isSelected ? {borderRadius:"10px", backgroundColor:color, width:`${size}px`, height:`${size}px`, marginTop:"20px",marginRight:"10px"}:{backgroundColor:color, width:`${size}px`, height:`${size}px`, marginTop:"20px",marginRight:"10px"}} onClick = {() => toggleBox(idx)}>{isSelected ? "This box is selected":""}
            </div>
            <div>
                <button onClick = {() => pardonBox(idx)}>Delete</button>
            </div>
        </div>
    );
}

export default DisplayBox;