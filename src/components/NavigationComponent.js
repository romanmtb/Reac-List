import React from "react";

const NavigationComponent = ({currentPage, totalPage, goForward, goBack}) => {

    if (currentPage === 1) {
        return (
            <div className="pagination justify-content-center" style = {{margin: '10px'}}>
                <button className="btn btn-primary btn-sm" onClick={goBack} disabled={true}>Prev</button>
                <span style = {{margin: '10px'}}>{currentPage} of {totalPage}</span>
                <button className="btn btn-primary btn-sm" onClick={goForward}>Next</button>
            </div>
        )
    } else if (currentPage === totalPage) {
        return (
            <div className="pagination justify-content-center" style = {{margin: '10px'}}>
                <button className="btn btn-primary btn-sm" onClick={goBack}>Prev</button>
                <span style = {{margin: '10px'}}>{currentPage} of {totalPage}</span>
                <button className="btn btn-primary btn-sm" onClick={goForward}disabled={true}>Next</button>
            </div>
        )
    }

    return (
        <div className="pagination justify-content-center" style = {{margin: '10px'}}>
            <button className="btn btn-primary btn-sm" onClick={goBack}>Prev</button>
                <span style = {{margin: '10px'}}>{currentPage} of {totalPage}</span>
            <button className="btn btn-primary btn-sm" onClick={goForward}>Next</button>
        </div>
    )
};

export default NavigationComponent