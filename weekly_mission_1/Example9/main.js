const MyPokemon = import('./pokemon.js')
const pikachu = new MyPokemon("pikachu")
const bulbasaur = new MyPokemon("bulbasaur")
const squirtle = new MyPokemon("squirtle")
const charmander = new MyPokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")