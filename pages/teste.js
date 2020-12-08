import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1>Teste</h1>
            
            <Link href="/">
            <a>Acessar página Home</a>
            </Link>
            <Link href="/sobre">
            <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}

export default Teste