const dataSize = 16;

async function DataFetch(offsetNum) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${dataSize}&offset=${offsetNum}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  export{DataFetch};