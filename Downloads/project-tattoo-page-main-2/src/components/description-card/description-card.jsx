import React from 'react';
import { useState } from 'react';
import Form from '../form/form';

import './description-card.css';

const Card = ({ title, paragraph1, paragraph2, paragraph3 }) => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<div className="tc br4 pa3 ma4 dib bw1 shadow-4">
			<article className="pa3 pa5-ns">
				<h1 className="f3 f2-m f2-l">{title}</h1>
				<p className="1h-copy">{paragraph1}</p>
				<p className="lh-copy">{paragraph2}</p>
				<p className="lh-copy">{paragraph3}</p>

				<div className="">
					<div
						className={`modal ${show === false ? 'close' : 'open'}`}
						id="modal-one"
					>
						<div className="modal-bg modal-exit"></div>
						<div className="modal-container">
							<h1>Regisztráció</h1>
							<Form />
							<button className="modal-close modal-exit" onClick={handleClose}>
								X
							</button>
						</div>
					</div>
					<div className="container">
						<button
							onClick={handleShow}
							data-modal="modal-one"
							className="modal-button grow f6 link dim ba bw2 ph3 pv2 mb2 dib mid-gray"
						>
							Érdekel
						</button>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Card;
