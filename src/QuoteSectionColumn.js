import React from 'react';

const QuoteSectionColumn = (props) => {
	return (
		<div className=" h-100 w-50 flex flex-column justify-end">
			{props.children}
			
		</div>
		)
}

export default QuoteSectionColumn; 