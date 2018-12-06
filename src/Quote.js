import React from 'react';


const Quote = ({quotes, quoteIndex, author, authorIndex}) => {
	return (
		<div>
			<div id="text">
			 {quotes[quoteIndex]}
			</div>
			<p id="author" className='pa2'>{author[authorIndex]}</p>
		</div>
		)
}

export default Quote;