import React from 'react';

const ShareSectionRow = (props) => {
	return (
		<div className="h-100 w-100 flex flex-row">
			{props.children}
		</div>
		)
}

export default ShareSectionRow;