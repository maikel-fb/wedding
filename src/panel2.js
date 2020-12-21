import React from 'react';
import image from './images/trouwlocatie-in-maarssen.jpg';

const panel2 = () => {
	return (
		<section class='panel spotlight medium right' id='first'>
			<div class='content span-7'>
				<h2 class='major'>Welkom</h2>
				<h3>14:00:</h3>
				<h3>Bistro Belle: Dorpsstraat 12, 3611 AE Oud Zuilen</h3>
			</div>
			<div class='image filtered tinted' data-position='top left'>
				<img src={image} alt='' />
			</div>
		</section>
	);
};

export default panel2;
