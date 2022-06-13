(() => {

  function getMovieById( movieId: number ) {
      console.log({ movieId });
  }

  function getMovieCastById( movieId: number ) {
      console.log({ movieId });
  }

  function getActorBioById( ActorId: string ) {
      console.log({ ActorId });
  }
  
  interface Movie {
    cast: string[]
    description: string,
    rating: number,
    title: string,
  }

  function createMovie({title, description, rating, cast}:Movie) {
      console.log({ title, description, rating, cast });
  }

  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor', birthdate);
      return true;        

  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    isDead && 1500; 

    isSeparated && 2500;

    return isRetired ? 3000 : 4000;
}

})();