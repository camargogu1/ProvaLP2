import Produto from "../templates/Produto";


export default function GradeProdutos(props) {

    if (props.listaProdutos && !props.visualizarCarrinho) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {props.listaProdutos.map((produto) => (
                    <Produto key={produto.id} produto={produto} setQuantidade={props.setQuantidade} quantidade={props.quantidade}
                    setCarrinho={props.setCarrinho} carrinho={props.carrinho} />
                ))}
            </div>
        )
    }
    else if (props.carrinho && props.visualizarCarrinho) {
        return (
            <>
                <div style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems:"center",
                    display:"flex"
                }}>
                    <h1>Meu carrinho</h1>
                </div>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    margin: '10px',
                    padding: '10px',
                    gap: '20px'
                }}>
                    {props.carrinho.map((produto) => (
                        <Produto key={produto.prod.id} produto={produto.prod} visualizarCarrinho={props.visualizarCarrinho}
                            setCarrinho={props.setCarrinho} carrinho={props.carrinho} quantidade={produto.qnt}/>
                    ))}
                </div>
            </>
        )
    }
    else {
        return (<h1>Carregando...</h1>)
    }
}