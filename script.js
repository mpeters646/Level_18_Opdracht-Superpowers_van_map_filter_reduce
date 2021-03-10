const heroNames = [];
superheroes.filter((superhero) => {
  heroNames.push(superhero.name);
});

const heroesWeightsLessThan190 = superheroes.filter((superhero) => superhero.weight < 190);
const heroesWeights200 = superheroes
  .filter((superhero) => {
    return superhero.weight == 200;
  })
  .map((superhero) => {
    return superhero.name;
  });

const firstAppearacesComics = [];
superheroes.filter((superhero) => {
  return firstAppearacesComics.push(superhero.first_appearance);
});

const dcComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === 'DC Comics';
  })
  .map((superhero) => {
    return superhero.name;
  });

const marvelComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === 'Marvel Comics';
  })
  .map((superhero) => {
    return superhero.name;
  });

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalWeightsDcComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === 'DC Comics';
  })
  .map((superhero) => {
    return parseInt(superhero.weight);
  })
  .reduce(reducer);

const totalWeightsMarvelComics = superheroes
  .filter((superhero) => {
    return superhero.publisher === 'Marvel Comics';
  })
  .map((superhero) => {
    const heroWeight = parseInt(superhero.weight);
    if (isNaN(heroWeight)) {
      return 0;
    }
    return heroWeight;
  })
  .reduce(reducer);

const highestWeightHeroes = superheroes.map((superhero) => {
  const heroWeight = parseInt(superhero.weight);
  if (isNaN(heroWeight)) {
    return 0;
  }
  return heroWeight;
});

console.log(heroNames); //1
console.log('~~~~');
console.log(heroesWeightsLessThan190); //2
console.log('~~~~');
console.log(heroesWeights200); //3
console.log('~~~~');
console.log(firstAppearacesComics); //4
console.log('~~~~');
console.log(dcComics); //5a
console.log('~~~~');
console.log(marvelComics); //5b
console.log('~~~~');
console.log(totalWeightsDcComics); //6
console.log('~~~~');
console.log(totalWeightsMarvelComics); //7
console.log('~~~~');
console.log(Math.max.apply(null, highestWeightHeroes));
