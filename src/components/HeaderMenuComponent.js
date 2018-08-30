import React from 'react';

const HeaderMenuComponent = props => (
	<button className="btn btn-primary btn-lg" onClick={props.refreshNews}>
		Refresh
	</button>
);

export default HeaderMenuComponent;
