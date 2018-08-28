import React from "react";
import ListElementComponent from "./ListElementComponent";

const ListComponent = ({data, openHandler}) => {
    return <ul>
        {
            //в данном случае handler - это как раз та функция когда будет обрабатываеть раскрытие новости
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
