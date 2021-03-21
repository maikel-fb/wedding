import React from 'react';

const panel3 = () => {
	const h2 = {
		fontSize: 30,
		color: '#d6a00e',
		textAlign: 'center',
		fontfamily: 'Amatic SC',
	};

	return (
		<section class='panel color4-alt'>
			<div class='intro color4'>
				<h2 style={h2}>Contactgegevens</h2>
				<p>
					Maikel & Anne Markx <br></br>
					Tafelbergdreef 92 <br></br>
					3564 AC, Utrecht
				</p>
			</div>
		</section>
	);
};

export default panel3;
