import React from 'react';

const TextCard = ({ data }) => {
	return (
		<div className="1h-copy">
			<h1 className="tc ph4">{data.title ? data.title : ''}</h1>
			<p>{data.text}</p>
		</div>
	);
};

export default TextCard;
