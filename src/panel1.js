import React from 'react';
import image from './images/P1014034.JPG';
import Liturgie from './images/Liturgie trouwdienst.pdf';

const Panel = () => {
	const h1 = {
		fontSize: 60,
		color: '#d6a00e',
		textAlign: 'center',
		fontfamily: 'Amatic SC',
	};

	const h2 = {
		fontSize: 40,
		color: '#d6a00e',
		textAlign: 'center',
		fontfamily: 'Amatic SC',
	};

	const p = {
		fontSize: 20,
		fontFamily: 'GeosansLight',
		color: '#d6a00e',
		padding: '5px',
		textAlign: 'justify',
		textJustify: 'inter - word',
	};

	return (
		<div>
			<section class='panel banner right'>
				<div class='content color0 span-3-75'>
					<h1 style={h1}>
						25 maart 2021
						<br />
					</h1>
					<h2 style={h2}>16:00 uur</h2>
					<p style={p}>
						Leuk dat je op afstand onze trouwdienst wilt meebeleven. Via deze
						site kun je de livestream kijken.
						<br />
						<br />
						<a href={Liturgie} download>
							<button className='button-primary'> Download Liturgie</button>
						</a>
					</p>
				</div>
				<div class='image filtered span-1-75' data-position='100%'>
					<img src={image} alt='' />
				</div>
			</section>
		</div>
	);
};

export default Panel;
