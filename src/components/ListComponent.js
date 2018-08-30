import React from "react";
import ListElementComponent from "./ListElementComponent";

const ListComponent = ({data, openHandler}) => {
    return <ul className="list-group">
        {
            data.length >= 1 &&
            data.map((item, idx) => {
              console.log('обязательно надо в ридми написать что мы можем в елемент передавать все содержимое (item) но чтобы не гонять лишние данные мы передаем только то что надо, типо оптимизация, об этом должны знать кто будут принимать работу')
                    return (
                        <ListElementComponent
                            key={idx}
                            idx={idx}
                            title={item.webTitle}
                            body={item.body}
                            handler={openHandler}
                            open={item.opened}
                            link={item.webUrl}
                            date={item.webPublicationDate}
                        />)
                }
            )
        }
    </ul>
};

export default ListComponent
