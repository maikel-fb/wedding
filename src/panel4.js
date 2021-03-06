import React from 'react';
import image from './images/Foto diner.jpg';

const panel4 = () => {
	return (
		<section class='panel spotlight medium right' id='first'>
			<div class='content span-7'>
				<h2 class='major'>16:00 Diner</h2>
				<h3>Bistro Belle </h3> <br />{' '}
				<h3>Dorpsstraat 12, 3611 AE Oud Zuilen</h3>
			</div>
			<div class='image filtered tinted' data-position='top left'>
				<img src={image} alt='' />
			</div>
		</section>
	);
};

export default panel4;
