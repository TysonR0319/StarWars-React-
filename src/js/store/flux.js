const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterData: null,
			planetData: null,
			vehicleData: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacterData: () =>{
				fetch("https://www.swapi.tech/api/people/", {
					 method: "GET"
				})
				.then((result) => result.json())
				.then((data) => {setStore({characterData: data}); console.log(data);})
				.catch((error) => console.log(error))
			},
			loadPlanetData: () =>{
				fetch("https://www.swapi.tech/api/planets/", {
					 method: "GET"
				})
				.then((result) => result.json())
				.then((data) => {setStore({planetData: data}); console.log(data);})
				.catch((error) => console.log(error))
			},
			loadVehicleData: () =>{
				fetch("https://www.swapi.tech/api/starships/", {
					 method: "GET"
				})
				.then((result) => result.json())
				.then((data) => {setStore({vehicleData: data}); console.log(data);})
				.catch((error) => console.log(error))
			}

				
				

				
				
			
		}
	};
};

export default getState;
