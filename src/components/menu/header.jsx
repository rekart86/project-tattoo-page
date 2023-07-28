import Navbar from './nav-bar';

const Header = () => {
	return (
		<header>
			<div className="nav-area flex">
				<a href="/" className="logo">
					<img
						src="https://t4.ftcdn.net/jpg/04/99/74/11/360_F_499741198_0g1T5jrshVIvlDZQZhOZbiIEFBuGnPE6.jpg"
						style={{ width: '50px' }}
						alt="logo"
					></img>
				</a>
				<Navbar />

				<div className="social">
					<a href="https://www.instagram.com/rekalfsz/" className="instagram">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
							style={{ width: '50px' }}
							alt="instagram"
						></img>
					</a>
					<a href="https://www.facebook.com/reka.nagy.104" className="facebook">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
							style={{ width: '50px' }}
							alt="facebook"
						></img>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
