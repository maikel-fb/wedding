import React from 'react';
import image from './images/Foto borrel.jpg';

const panel6 = () => {
	return (
		<section class='panel spotlight medium right' id='first'>
			<div class='content span-7'>
				<h2 class='major'>20:30 Borrel</h2>
				<h3>Bistro Belle:</h3>
				<h3>Dorpsstraat 12, 3611 AE Oud Zuilen</h3>
			</div>
			<div class='image filtered tinted' data-position='top left'>
				<img src={image} alt='' />
			</div>
		</section>
	);
};

export default panel6;
