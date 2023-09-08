import React from "react";

interface currtime{
    time: number;
}

const Button = (props: currtime) => {
    
    return (
        <>
        <button className="border-black bg-red-700 text-white text-md px-6 rounded-full" type="button"> Capture! </button>
        <p className="text-sm mx-auto my-1">Timestamp captured is: {props.time}</p>
        
        </>
    )
}

export default Button;