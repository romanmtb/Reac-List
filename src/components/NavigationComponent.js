import React from "react";

const NavigationComponent = ({currentPage, totalPage, goForward, goBack}) => {
    return (
        <div className="pagination justify-content-center" style = {{margin: '10px'}}>
            <button className="btn btn-primary btn-sm" onClick={goBack}>Prev</button>
                <span style = {{margin: '10px'}}>{currentPage} of {totalPage}</span>
            <button className="btn btn-primary btn-sm" onClick={goForward}>Next</button>
        </div>
    )
};

export default NavigationComponent