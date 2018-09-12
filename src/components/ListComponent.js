import React from 'react';
import ListElementComponent from './ListElementComponent';

const ListComponent = ({ data, openHandler }) => {
	return (
		<div className="list-group">
			{data.length >= 1 &&
				data.map((item, idx) => {
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
						/>
					);
				})}
		</div>
	);
};

export default ListComponent;