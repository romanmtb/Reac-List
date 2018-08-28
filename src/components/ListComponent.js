import React from "react";
import ListElementComponent from "./ListElementComponent";

const ListComponent = ({data, openHandler}) => {
    return <ul className="list-group">
        {
            data.length >= 1 &&
            data.map((item, idx) => {
                    return (
                        <ListElementComponent
                            key={idx}
                            idx={idx}
                            title={item.webTitle}
                            handler={openHandler}
                            open={item.opened}
                        />)
                }
            )
        }
    </ul>
};

export default ListComponent