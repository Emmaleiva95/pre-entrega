
const ItemDetail = ({imagen, titulo, descripcion, precio}) => {

  return (
            <div className="container">
                <h1 className="my-3">Detalle item</h1>
                <div className="row justify-content-center">
                    <div className="col-md-4 card p-3 my-2">
                        <img src={`/assets/img/${imagen}`} className="img-fluid" alt="" />
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                        <span className="d-inline mt-3 mb-2 fw-bold text-primary">$ {precio}</span>
                        <label className="form-label">Cantidad:</label>
                        <input style={{width:'100px', marginInline:'auto'}} type="number" min="1" value="1" className="form-control mb-3"/>
                        <button className="btn btn-primary">Añadir al carrito</button>
                    </div>
                    
                </div>
            </div>
  )
}

export default ItemDetail