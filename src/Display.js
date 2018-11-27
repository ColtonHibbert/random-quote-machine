import React from 'react';
import App from './App';



const Display = (props) => {
	return (
		<div className="w-60 h-60 tc br3 ma2 bg-white flex flex-column"> 
			{props.children}
		</div>
		)
}

export default Display;
