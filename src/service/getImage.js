export default function getIMG(url) {
    const id = (() => {
      return url.slice(0, -1).split("pokemon/")[1];
    })();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;
  }