import React from "react";

const ListElementComponent = ({title, handler, open, body, idx, link, date}) => (
    <div className="card">
      <div className="card-header">
          <b>{title.substr(0, 85)}</b>
          <button className="btn btn-primary btn-group-sm float-right" onClick={e => handler(e, idx)}>---</button>
      </div>
        <div className="card-body">
            <h6 className="card-subtitle text-muted">{(new Date(date)).toLocaleString()}</h6>
            {(open && body) && <i>{`${body}...`}<a href={link}>full article</a></i>}
        </div>
    </div>);


export default ListElementComponent
