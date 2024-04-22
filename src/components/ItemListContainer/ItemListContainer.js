import { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './itemlistcontainer.css';
import { fetchingData, fetchingDataByCategory } from '../../APIdata/APIdata'
import { Link, useParams } from 'react-router-dom'



const ItemListContainer = ({ greetings }) => {
  // INICIALIZO EL ESTADO DEL LISTADO EN VACÍO.
  const [listadoItems, setListado] = useState([])
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  //MONTAJE
  useEffect(() => {
    if(params.categoria){
    
      fetchingDataByCategory(params.categoria)
      .then((data) => {
        // CAMBIO EL ESTADO DEL LISTADO.
        setListado(data);
        console.log(data);
      })
       .finally(() => {
            setLoading(false);
        })
    }else{
      // FETCHING DE DATOS
      fetchingData()
      .then((data) => {
        // CAMBIO EL ESTADO DEL LISTADO.
        setListado(data);
      })
       .finally(() => {
            setLoading(false);
        })
    }
  
    
   
  }, [params])

  return (
    <section>
      <h2 className='py-4'>{greetings}</h2>
      <hr />
      <div className="container">
        <div className='contenedor-categorias bg-primary'>
          <Link to='/items/category/ficcion'>Ficción</Link>
          <Link to='/items/category/thriller'>Thriller</Link>
          <Link to='/items/category/drama'>Drama</Link>
        </div>
        <div className="contenedor-items row">

         {
          isLoading 
          ?
          <p className="mt-5">Is loading..</p> 
          :
          listadoItems.map( (item) => {
            const {id, imagen, titulo, descripcion, precio} = item;
            return (
            <Item key={id} idItem={id} imagen={imagen} titulo={titulo} descripcion={descripcion} precio={precio}/>
            )
          })

         }



        </div>
      </div>

    </section>
  )
}

export default ItemListContainer