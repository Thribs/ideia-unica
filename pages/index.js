import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
       <div>
           <div>{contador}</div>
           <button onClick={adicionarContador}>Adicionar</button>
       </div> 
    )
}

function Home() {
    return (
        <div>
            <h4>Home 4</h4>
            <a href="/sobre">Acessar página Sobre</a>
            <Contador />
            <div>Teste</div>
        </div>
    )
}

export default Home