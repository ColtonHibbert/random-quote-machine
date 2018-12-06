import React from 'react';
import twitter from './twitter-icon.png';

const Share = () => {
	return (
			<div className="flex h2 white bg-light-green br2 ma2 pa1 pointer items-center">
			  <a id="tweet-quote" href="twitter.com/intent/tweet"><img style={{ height: 36, width: 36,}} src={twitter} alt="twitter-icon"/></a>
			</div>
		)
}

export default Share;