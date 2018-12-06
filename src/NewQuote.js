import React from 'react';


const NewQuote = ({ onPress, colors, colorIndex }) => {
	return (
		<div 
			id="new-quote"
			style={{background: colors[colorIndex]}}
			className="flex h2 white bg-light-green br2 ma2 pa1 pointer items-center" 
			onClick={onPress} >
			NewQuote
		</div>
		)
}

export default NewQuote;