import React from "react";

const ListElementComponent = ({title, handler, open, idx}) => (
    <li className="list-group-item">{title}<a href={'#'} onClick={e => handler(e, idx)}>
        <button className="btn btn-outline-primary float-right">expand new</button>
    </a>
        {open && <i> expanded </i>}
    </li>);


export default ListElementComponent
