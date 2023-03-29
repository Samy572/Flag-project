const Card = ({ country }) => {
	console.log(country)
	return (
		<li className="card">
			<img src={country.flags.svg} alt={'drapeau' + country.translations.fra.common} />
			<a href={country.maps.googleMaps} target="_blank" className="infos">
				<h2>{country.translations.fra.common}</h2>
				<h4>{country.capital}</h4>
				<p>Pop. {country.population.toLocaleString()}</p>
			</a>
		</li>
	);
};

export default Card;
