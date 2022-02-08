import { useState } from "react"



const Formulario = ({finalizarCompra}) => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onNameChanges = (e) => {
        setName(e.target.value)
    }

    const onLastNameChanges = (e) => {
        setLastName(e.target.value)
    }

    const onEmailChanges = (e) => {
        setEmail(e.target.value)
    }

    console.log(`name ahora es: ${name}`)
    console.log(`lastName ahora es: ${lastName}`)
    console.log(`email ahora es: ${email}`)
    
    
    return (
        <div>
            <label>Nombre</label>
            <input type="text" placeholder="nombre" onChange={onNameChanges}/>
            <label>Apellidos</label>
            <input type="text" placeholder="apellidos" onChange={onLastNameChanges} />
            <label>Email</label>
            <input type="text" placeholder="email" onChange={onEmailChanges} />
            <button onClick={()=>{finalizarCompra()}}>finalizar compra</button>
        </div>
    )
}

export default Formulario
