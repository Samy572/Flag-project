import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
	const [data, setData] = useState([]);
	const [rangeValue, SetRangeValue] = useState(36);
	//  Le useEffect se joue lorsque le composant est monté
	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data));
	}, []);

	return (
		<div className="countries">
			<ul className="radio-container">
				<input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => SetRangeValue(e.currentTarget.value as any)} />
			</ul>
			<ul>
				{data.slice(0, rangeValue).map((country, index) => (
					<Card key={index} country={country} />
				))}
			</ul>
		</div>
	);
};

export default Countries;
