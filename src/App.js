import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import { useEffect, useState } from "react";
import VisualizarProdutos from "./templates/VisualizarProdutos";

function App() {

  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [quantidades, setQuantidades] = useState([])
  const [visualizarCarrinho, setVisualizarCarrinho] = useState(false)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
    setCarrinho(carrinhoSalvo)
  }, []);

  useEffect(() => {
    if(carrinho){
      localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }
  }, [carrinho])

  return (
    < div className="App" >
      <Cabecalho />
      <BarraBusca carrinho={carrinho} setVisualizarCarrinho={setVisualizarCarrinho} visualizarCarrinho={visualizarCarrinho} />
      <GradeProdutos listaProdutos={produtos} visualizarCarrinho={visualizarCarrinho} 
      setQuantidade={setQuantidades} quantidade={quantidades}
      setCarrinho={setCarrinho} carrinho={carrinho} />
    </div >

  )




}

export default App;
