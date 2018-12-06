import React from 'react';


const NewQuote = ({ onPress, }) => {
	return (
		<div 
			id="new-quote"
			className="flex h2 white bg-light-green br2 ma2 pa1 pointer items-center" 
			onClick={onPress} >
			NewQuote
		</div>
		)
}

export default NewQuote;