import React from 'react';
import Card from './card';

const CardList = ({ title, data }) => {
	return (
		<div>
			<h1 className="tc ph4">{title}</h1>
			{data.map((user, i) => {
				return (
					<Card
						key={i}
						nev={user.nev}
						email={user.email}
						mobil={user.mobil}
						img={user.img}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
