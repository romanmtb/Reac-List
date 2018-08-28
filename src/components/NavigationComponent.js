import React from "react";

const NavigationCompoennt = ({currentPage, totalPage, goForward, goBack}) => {
    return (
        <div>
            <button onClick={goBack}>Prev</button>
            <span>{currentPage} of {totalPage}</span>
            <button onClick={goForward}>Next</button>
        </div>
    )
}

export default NavigationCompoennt



