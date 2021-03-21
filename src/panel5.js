import React from 'react';
import image from './images/1.jpg';

const panel5 = () => {
	return (
		<section class='panel spotlight medium right' id='first'>
			<div class='content span-7'>
				<h2 class='major'>19:00 Kerk</h2>
				<h3>Slotkapel Oud-Zuilen</h3>
				<h3>Dorpsstraat 10, 3611 AE Oud Zuilen</h3>
			</div>
			<div class='image filtered tinted' data-position='top left'>
				<img src={image} alt='' />
			</div>
		</section>
	);
};

export default panel5;
