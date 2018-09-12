import React from 'react';

const NavigationComponent = ({
	currentPage,
	totalPage,
	goForward,
	goBack,
	inputChangeHandler,
	setPage,
}) => (
	<div className="pagination justify-content-center" style={{ margin: '10px' }}>
		<button
			className="btn btn-primary btn-sm"
			onClick={goBack}
			disabled={currentPage === 1}
		>
			Prev
		</button>

		<input
			type="text"
			style={{ width: '70px' }}
			value={currentPage}
			onChange={inputChangeHandler}

		/>
		<button onClick={()=>setPage(currentPage)}>GO</button>


		<span style={{ margin: '10px' }}>{totalPage}</span>
		<button
			className="btn btn-primary btn-sm"
			onClick={goForward}
			disabled={currentPage === totalPage}
		>
			Next
		</button>
	</div>
);

export default NavigationComponent;
