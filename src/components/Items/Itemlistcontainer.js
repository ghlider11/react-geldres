import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom"
const onAdd = ()=>{
    console.log("Producto agregado")
}


const Itemlistcontainer = ({productoss},{gretting}) => {

    let [lista, setLista] = useState([])
    let { nombre } = useParams();
    console.log(nombre);

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                if (!nombre) {
                    res(productoss)
                }else{
                    res(productoss.filter(prod=>prod.title===nombre));
                };
                
            },2000)
        })
        

        promesa.then(prods=>{
            setLista(prods);
        })

    },[nombre])


    return (
        <>

            <main>
                
               <p className="grett"> {gretting} </p>
                
                <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>

            </main>
            <ItemList lista={lista}/>
      

        </>
    )
}

export default Itemlistcontainer