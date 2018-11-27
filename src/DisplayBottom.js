import React from 'react';

const DisplayBottom = (props) => {
	return (
		<div className="w-100 h-100 flex flex-row">
			{props.children}
		</div>
		)
}

export default DisplayBottom;