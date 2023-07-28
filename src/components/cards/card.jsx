import React from 'react';

const Card = ({ nev, email, mobil, img }) => {
	return (
		<div className="tc grow br3 pa3 ma2 dib bw2 shadow-5">
			<img alt="tetovalo" src={`${img}`} style={{ height: '200px' }} />
			<h2>{nev}</h2>
			<div>
				<p>{email}</p>
				<p>{mobil}</p>
			</div>
		</div>
	);
};

export default Card;
