import React, { useContext } from 'react';
import SmurfCard from './SmurfCard.js';

import { Container } from 'semantic-ui-react';

export default function SmurfList() {
	return (
		<Container>
			<SmurfCard />
		</Container>
	);
}
