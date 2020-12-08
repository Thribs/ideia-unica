import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            
            <Link href="/">
            <h4><a>Acessar página Home</a></h4>
            </Link>
            
            <Link href="/tempo">
            <h4><a>Acessar página Tempo</a></h4>
            </Link>
        </div>
    )
}

export default Sobre