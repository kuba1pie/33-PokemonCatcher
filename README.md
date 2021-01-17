# new

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
Screenshots: 

![Catch result](https://raw.githubusercontent.com/kuba1pie/33-PokemonCatcher/main/img/1.png "Catch result")

![Pokemons](https://raw.githubusercontent.com/kuba1pie/33-PokemonCatcher/main/img/2.png "Pokemons")

![Form](https://raw.githubusercontent.com/kuba1pie/33-PokemonCatcher/main/img/3.png "Form")

![Blank form error](https://raw.githubusercontent.com/kuba1pie/33-PokemonCatcher/main/img/4.png "Blank form error")

![Welcome page](https://raw.githubusercontent.com/kuba1pie/33-PokemonCatcher/main/img/5.png "Welcome page")


The task: Pokemon Catcher

You will create a web app for new Pokemon Trainers, allowing them to catch their first pokemons.

After opening the page, the users should see a welcome page with a text input for their nickname and a 'Continue' button. The nickname field should be required. 

The next page should contain:

a welcome message: 'Hello, [nickname from the first view]!'

a list of 5 pokemons they have a chance to catch

a 'Catch'em!' button below the pokemon list

You will use PokeAPI to get the pokemons. You can get a list of 5 pokemons by requesting the following URL: 

https://pokeapi.co/api/v2/pokemon?limit=5&offset=[offset]

The offset should be equal to the length of the nickname provided by the user multiplied by 10. You will need to query the PokeAPI to get all the required pokemon data. Then the data should be normalized as follows:

Single Pokemon object:

{

  name: String,

  artwork: String,

  stats: Array of Objects: {

    name: String,

    value: Number

  }

}

You can get the values from the PokeAPI

artwork -> data.sprites.other.official-artwork.front_default,

name -> data.name,

stats -> data.stats:

      name: stat.name,

      value: stat.base_stat

A single pokemon card component should contain:

an artwork image

name (upper-case, hyphens replaced with spaces)

Clicking the 'Catch'em!' button should trigger the catch action. Each pokemon has a 50% chance of getting caught. After clicking the button, you should log to the console following object: 

{

  nickname: String, // Users nickname

  pokemons: Array // List of the caught pokemons, without the ones the user failed to catch.

}

The functional approach would be a plus.