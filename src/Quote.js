import React from 'react';


const Quote = ({quotes, quoteIndex}) => {
	return (
		<div>
			<div>
			 {quotes[quoteIndex]}
			</div>
			<p className='pa2'>-Author</p>
		</div>
		)
}

export default Quote;