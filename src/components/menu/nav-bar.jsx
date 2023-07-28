import { menuItems } from '../../dummy-data/menu-points';
import MenuItems from './menu-items';

const Navbar = () => {
	return (
		<nav>
			<ul className="menus">
				{menuItems.map((menu, index) => {
					return <MenuItems items={menu} key={index} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
