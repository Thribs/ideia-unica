import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>
            
            <Link href="/">
            <a>Acessar página Home</a>
            </Link>
            <Link href="/teste">
            <a>Acessar página Teste</a>
            </Link>
        </div>
    )
}

export default Sobre