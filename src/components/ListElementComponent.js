import React from "react";

const ListElementComponent = ({title, handler, open, idx}) => (
    <li>{title}<a href={'#'} onClick={e => handler(e, idx)}> expand new </a>
        {open && <i> expanded </i>}
    </li>);


export default ListElementComponent
