import React from 'react';

const form = () => {
	return (
		<section class='panel color4-alt'>
			<div class='intro color4'>
				<h2 class='major'>RSVP</h2>
				<p>Laat je ons weten of je erbij kan zijn?</p>
			</div>
			<div class='inner columns divided'>
				<div class='span-3-25'>
					<form method='post' action='#'>
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
									id='demo-copy'
									name='demo-copy'
									class='color2'
								/>
								<label for='demo-copy'>Receptie</label>
							</div>
							<div class='field quarter'>
								<input
									type='checkbox'
									id='demo-copy'
									name='demo-copy'
									class='color2'
								/>
								<label for='demo-copy'>Kerkdienst</label>
							</div>
							<div class='field quarter'>
								<input
									type='checkbox'
									id='demo-human'
									name='demo-human'
									class='color2'
									checked
								/>
								<label for='demo-human'>Feest</label>
							</div>
							<div class='field third'>
								<label for='demo-category'>Mijn huishouden bestaat uit:</label>
								<div class='select-wrapper'>
									<select name='demo-category' id='demo-category'>
										<option value=''>-</option>
										<option value='1'>1 persoon</option>
										<option value='1'>2 personen</option>
										<option value='1'>3 personen</option>
										<option value='1'>4 personen</option>
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
				<div class='span-1-5'>
					<ul class='contact-icons color1'>
						<li class='icon brands fa-twitter'>
							<p>Dirk-Jan Pennings</p>
						</li>
						<li class='icon brands fa-facebook-f'>
							<p>+31 6 11 97 75 23</p>
						</li>
						<li class='icon brands fa-snapchat-ghost'>
							<p>Nienke Hendriksen</p>
						</li>
						<li class='icon brands fa-phone'>
							<p>+31 6 11 97 75 23</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default form;
