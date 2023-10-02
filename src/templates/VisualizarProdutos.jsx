import { useEffect } from "react"
import Produto from "./Produto"

export default function VisualizarProdutos(props){
    useEffect(()=>{
        console.log(props.listaProdutos)
    },[])

    return(
        <div style={{
            width:"100%",
            height: "100vh",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            {props.listaProdutos.map((produto) => {
                <Produto key={produto.id} produto={produto}/>
            })}
        </div>
    )
}