import React from 'react';
import twitter from './twitter-icon.png';

const Share = ({colors, colorIndex}) => {
	return (
			<div style={{background: colors[colorIndex]}} className="flex h2 white br2 ma2 pa1 pointer items-center">
			  <a id="tweet-quote" href="twitter.com/intent/tweet"><img style={{ height: 36, width: 36, }} src={twitter} alt="twitter-icon"/></a>
			</div>
		)
}

export default Share;