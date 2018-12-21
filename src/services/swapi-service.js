export default class SwapiService {
	constructor(){
		this._apiBase = 'https://swapi.co/api';
		this._imageBase = 'https://starwars-visualguide.com/assets/img';
		this.getResourse = async(url) => {
			const res = await fetch(`${this._apiBase}${url}`);
			if(!res.ok){
				throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
			}
			return await res.json();
		};

		this.getAllPeople = async() => {
			const res = await this.getResourse(`/people/`);
			return res.results.map(this._transformPerson);
		};

		this.getPerson = async(id) => {
			const person = await this.getResourse(`/people/${id}/`);
			return this._transformPerson(person);
		};
		this.getPersonImage = ({id}) => {
			return  `${this._imageBase}/characters/${id}.jpg`;
		};
		this.getStarshipImage = ({id}) => {
			return  `${this._imageBase}/starships/${id}.jpg`;
		};
		this.getPlanetImage = ({id}) => {
			return  `${this._imageBase}/planets/${id}.jpg`;
		};
		this.getAllStarships = async() => {
			const res = await this.getResourse(`/starships/`);
			return res.results.map(this._transformStarship);
		};

		this.getStarship = async(id) => {
			const starship = await this.getResourse(`/starships/${id}/`);
			return this._transformStarship(starship);
		};

		this.getAllPlanets = async() => {
			const res = await this.getResourse(`/planets/`);
			return res.results.map(this._transformPlanet);
		};

		this.getPlanet = async(id) => {
			const planet = await this.getResourse(`/planets/${id}/`);
			return this._transformPlanet(planet);
		};
		this._extractId = (item) => {
			const idRegExp = /\/([0-9]*)\/$/;
			return item.url.match(idRegExp)[1];
		};
		this._transformPlanet = (planet) => {
			return {
				id: this._extractId(planet),
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
			}
		};
		this._transformStarship = (starship) => {
			return {
				id: this._extractId(starship),
				name: starship.name,
				model: starship.model,
				manufacturer: starship.manufacturer,
				costInCredits: starship.cost_in_credits,
				length: starship.length,
				crew: starship.crew,
				passengers: starship.passengers,
                cargoCapality: starship.cargo_capality
			}
		};
		this._transformPerson = (person) => {
			return {
				id: this._extractId(person),
                name: person.name,
                gender: person.gender,
                birthYear: person.birth_year,
                eyeColor: person.eye_color
			}
		};
	}
};