import React from 'react';
import TextCard from './text-card';

const TextCardList = ({ data }) => {
	return (
		<div className='tc br4 pa3 ma4 dib bw1 shadow-4'>
			
			{data.map((text, i) => {
				return <TextCard key={i} data={text} />;
			})}
		</div>
	);
};

export default TextCardList;
