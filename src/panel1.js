import React from 'react';
import image from './images/P1014034.JPG';

const Panel = () => {
	const h1 = {
		fontSize: 75,
		color: '#d6a00e',
		textAlign: 'center',
		fontFamily: 'WildSpirits',
	};

	const p = {
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
					<p style={p}>
						Gaan wij trouwen. We zouden het heel leuk vinden als je erbij zou
						kunnen zijn.
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
