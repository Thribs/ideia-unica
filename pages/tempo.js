import Link from 'next/link'

function Tempo() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <h1>Tempo</h1>
            <Link href="/">
            <a>Acessar página Home</a>
            </Link>
            <Link href="/sobre">
            <a>Acessar página Sobre</a>
            </Link>
            <h4>{dynamicDateString} (dinâmico)</h4>
        </div>
    )
}

export default Tempo;