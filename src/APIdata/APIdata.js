
  const arrayListado = [
    {
        id:321,
        imagen:'1984.png',
        titulo: '1984 George Orwell',
        descripcion: 'Novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949.',
        precio: '35000',
        genero: "ficcion"
      },
       {
        id:351,
        titulo:"El Gran Gatsby",
        descripcion:"novela de 1925 escrita por el autor estadounidense F. Scott Fitzgerald que sigue a un grupo de personajes que viven en la ciudad ficticia de West Egg en la próspera Long Island, en el verano de 1922.",
        precio:17000,
        imagen:"elgrangatsby.png",
        genero: "thriller"
      },
      {
        id:851,
       titulo:"Cadaver Exquisito",
       descripcion:"Una despiadada distopía en la que Agustina Bazterrica inspira, con el poder explosivo de la ficción, debates de suma actualidad",
       precio:25000,
       stock:10,
       imagen:"cadaverexquisito.png",
       genero:"drama"
    }
  ]

  // CREO UN PROMESA QUE TARDE DOS SEGUNDOS EN RESOLVERSE.
  export const fetchingData = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayListado)
    },
    500)
  })
  }
  export const fetchingDataByCategory = (category) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayFiltrado = arrayListado.filter(( element ) => { return element.genero == category});
      resolve(arrayFiltrado)
    },
    500)
  })
  }

  // SOLICITAR UN ITEM POR ID.
  export const fetchingItemDetail = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const itemDetail = arrayListado.find((element) => { return element.id === parseInt(id)});
    
        resolve(itemDetail)
      },
      500)
    })
  }
