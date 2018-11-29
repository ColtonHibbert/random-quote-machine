import React from 'react';


const NewQuote = ({ onPress, }) => {
	return (
		<div className="flex h-50 w-15 white bg-light-green br2 ma2 pa1" 
			onClick={onPress} >
			NewQuote
		</div>
		)
}

export default NewQuote;