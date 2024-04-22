import { useParams } from "react-router-dom"
import { fetchingItemDetail } from "../../APIdata/APIdata";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const params = useParams();

    const [itemDetail, setItemDetail] = useState({});
    const [isLoading, setLoading] = useState(true);
   
    useEffect(() => {
        fetchingItemDetail(params.id)
        .then( (dataDetail) => {
            
            setItemDetail(dataDetail);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

  return (
    <section>
        <h2>Detalle item</h2>
    <hr />
    <div className="container">
      <div className="row">
        {
                    isLoading 
                ? 
                    <p>Is loading..</p>
                :
                    <ItemDetail imagen={itemDetail.imagen} titulo={itemDetail.titulo} descripcion={itemDetail.descripcion} precio={itemDetail.precio} />
        }

      </div>
    </div>

  </section>
  )
}

export default ItemDetailContainer