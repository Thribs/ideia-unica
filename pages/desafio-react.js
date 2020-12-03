//<CapsLock texto="Me deixe em Caps Lock por favor"/>

// function CapsLock(props){
//     const textoInserido = props.texto
//     const textoEmCapsLock = textoInserido.toUpperCase()
//     return <div>{textoEmCapsLock}</div>
// }

function Contador() {
    let contador = 10;

    function adicionarContador() {
        console.log('Adicionou');
    }

    return (
       <div>
           <div>{contador}</div>
           <button onClick={adicionarContador}>Adicionar</button>
       </div> 
    )
}
function Pagina() {
    return <
}