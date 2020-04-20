import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

import SmurfList from './SmurfList.js';
import AddSmurfForm from './AddSmurfForm';

function App() {
	const data = useContext(SmurfContext);
	const [apiData, setApiData] = useState(data);

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				setApiData(...data, res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<SmurfContext.Provider value={{ apiData }}>
			<div className='App'>
				<SmurfList />
				<AddSmurfForm />
			</div>
		</SmurfContext.Provider>
	);
}

export default App;
