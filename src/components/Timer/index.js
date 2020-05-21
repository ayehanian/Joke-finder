import React from "react";

const Timer = ({updated}) => {

    const calcHours = () => {
        let hours = Date.now() - Date.parse(updated);
        return Math.round(hours / 3600000);
    };

    return (
        <>
            {calcHours()}
        </>
    );

};


export default Timer;
