import React from 'react';
import map from './images/map.png';

const form = () => {
	return (
		<section class='panel color4-alt'>
			<div class='intro color4'>
				<h2 class='major'>RSVP</h2>
				<p>Laat je ons weten of je erbij kan zijn?</p>
			</div>
			<div class='inner columns divided'>
				<div class='span-3-25'>
					<form name='contact' method='post'>
						<input type='hidden' name='form-name' value='contact' />

						<div class='fields'>
							<div class='field half'>
								<label for='name'>Naam</label>
								<input type='text' name='name' id='name' />
							</div>
							<div class='field half'>
								<label for='email'>Email</label>
								<input type='email' name='email' id='email' />
							</div>
							<div class='field quarter'>
								<input
									type='checkbox'
									id='jawoord'
									name='Ja- woord'
									class='color2'
								/>
								<label for='jawoord'>Ja- woord</label>
							</div>
							<div class='field quarter'>
								<input
									type='checkbox'
									id='kerkdienst'
									name='Kerkdienst'
									class='color2'
								/>
								<label for='kerkdienst'>Kerkdienst</label>
							</div>
							<div class='field quarter'>
								<input type='checkbox' id='diner' name='Diner' class='color2' />
								<label for='diner'>Diner</label>
							</div>
							<div class='field quarter'>
								<input
									type='checkbox'
									id='borrel'
									name='Borrel'
									class='color2'
								/>
								<label for='borrel'>Borrel</label>
							</div>

							<div class='field third'>
								<label for='demo-category'>Mijn huishouden bestaat uit:</label>
								<div class='select-wrapper'>
									<select name='demo-category' id='demo-category'>
										<option value=''>-</option>
										<option value='1'>1 persoon</option>
										<option value='2'>2 personen</option>
										<option value='3'>3 personen</option>
										<option value='4'>4 personen</option>
										<option value='5'>5 personen</option>
									</select>
								</div>
							</div>
							<div class='field'>
								<label for='demo-message'>Wil je nog wat anders kwijt?</label>
								<textarea
									name='demo-message'
									id='demo-message'
									placeholder='Typ hier je bericht'
									rows='2'
								></textarea>
							</div>
						</div>
						<ul class='actions'>
							<li>
								<input type='submit' value='Verstuur' class='button primary' />
							</li>
						</ul>
					</form>
				</div>
				<div class='span-1-6'>
					<img src={map} width='500' height='auto' alt='' />
				</div>
			</div>
		</section>
	);
};

export default form;
