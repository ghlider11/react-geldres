import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const productosIniciales = 
    {  id: 1,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'url',
         }

const ItemDetailContainer = () =>{
    let [lista, setLista] = useState({})

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        
        promesa
        .then((productos)=>{
            console.log("Todo bien")
            setLista(productos)
        })
        .catch(()=>{
            console.log("Todo mal")
        })

    },[])
    return (
       <div>
           <ItemDetail lista={lista}/>
           
       </div> 
    )
}

export default ItemDetailContainer