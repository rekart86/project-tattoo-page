import './App.css';
import Header from './components/menu/header';
import CardList from './components/cards/card-list';
import { tetovalok } from './dummy-data/tetovalok';
import {
	tattooTypes,
	descriptions,
	tattooPrices,
	piercingPrices,
	introduction,
	care,
} from './dummy-data/tetovalasok';
import DescriptionCardList from './components/description-card/description-card-list';
import List from './components/list/list';
import TextCardList from './components/text-card/text-card-list';

function App() {
	return (
		<div>
			<Header />
			<TextCardList data={introduction} />
			<TextCardList data={care} />
			<List title={'Tetoválás áraink'} data={tattooPrices} />
			<List title={'Piercing/ Microdermal áraink'} data={piercingPrices} />
			<DescriptionCardList title={'Szolgaltatasok'} data={descriptions} />
			<CardList title={'Tetovalasok'} data={tattooTypes} />
			<CardList title={'Munkatarsaink'} data={tetovalok} />
		</div>
	);
}

export default App;
