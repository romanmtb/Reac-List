import React from "react";

const ListComponent = ({data}) => {
    return <ul>
        {data.length >= 1 && data.map(function (item) {
            return <li key={item.id}>{item.webTitle}</li>
        })}
    </ul>
    }

export default ListComponent
