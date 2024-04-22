import { useState } from "react"
import { Link } from "react-router-dom";

const Item = ({idItem, imagen, titulo, descripcion, precio}) => {

    const [esFavorito, setFavorito] = useState(false);
    /* const valor = estado[0];
    const setValor = estado[1];
    */

    function handleClick () {
       /* if(esFavorito){
            setFavorito(false);
        }else{
            setFavorito(true);
        }*/
        setFavorito(!esFavorito);
     
    }
    
  
  return (
    <div className="col-md-4 my-4">
        <div className="item card p-3">
            <img src={`/assets/img/${imagen}`} className="img-fluid" alt="" />
            
            <button onClick={handleClick} className="btn btn-outline-primary my-3"> 
                { 
                    esFavorito ? 'Quitar de favoritos' : 'Agregar a Favoritos' 
                }
            </button>

            <h4 className="mt-3">{titulo}</h4>
            <p>{descripcion}</p>
            <span className="d-inline mt-3 mb-2 fw-bold text-primary">$ {precio}</span>
  
            <Link to={`detail/${idItem}`} className="btn btn-success btn-carrito">Ver detalle</Link>

        </div>
    </div>
  )
}

export default Item

// PascalCase 
// camelCase