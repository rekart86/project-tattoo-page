import React from 'react';

const List = ({ prices }) => {
	return (
		<div className="tc grow br3 pa3 ma2 dib bw2 shadow-5">
			{prices.map((price, i) => {
				return (
					<div>
						<h4>{price.nev}:</h4>
						<p>{price.ar}</p>
					</div>
				);
			})}
		</div>
	);
};

export default List;
