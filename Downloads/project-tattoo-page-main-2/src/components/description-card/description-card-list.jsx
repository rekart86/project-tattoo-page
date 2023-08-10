import React from 'react';
import DescriptionCard from './description-card';

const DescriptionCardList = ({ title, data }) => {
	return (
		<div>
			<h1 className='tc ph4'>{title}</h1>
			{data.map((item, i) => {
				return (
					<DescriptionCard
						key={i}
						title={item.title}
						paragraph1={item.text1}
            paragraph2={item.text2}
            paragraph3={item.text3}
					/>
				);
			})}
		</div>
	);
};

export default DescriptionCardList;
