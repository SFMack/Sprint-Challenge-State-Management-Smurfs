import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import { Card } from 'semantic-ui-react';

export default function SmurfCard() {
	const data = useContext(SmurfContext);
	const { apiData } = data;
	console.log(apiData);
	return (
		<div>
			{apiData
				? apiData.map(smurf => (
						<Card className='smurf-card' key={smurf.id}>
							<Card.Content>
								<Card.Header>{smurf.name}</Card.Header>
								<Card.Meta>
									<span className='age'>Age: {smurf.age}</span>
									<br />
									<span className='height'>Height: {smurf.height}</span>
								</Card.Meta>
								<Card.Description></Card.Description>
							</Card.Content>
						</Card>
				  ))
				: null}
		</div>
	);
}
