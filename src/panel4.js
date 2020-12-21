import React from 'react';
import image from './images/Bistro-Belle-zuiver2.jpg';

const panel4 = () => {
	return (
		<section class='panel spotlight medium right' id='first'>
			<div class='content span-7'>
				<h2 class='major'>Borrel</h2>
				<h3>20:30:</h3>
				<h3>Bistro Belle: Dorpsstraat 12, 3611 AE Oud Zuilen</h3>
			</div>
			<div class='image filtered tinted' data-position='top left'>
				<img src={image} alt='' />
			</div>
		</section>
	);
};

export default panel4;
