import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre">
            <a>Acessar página Sobre</a>
            </Link>
            <Link href="/tempo">
            <a>Acessar página Tempo</a>
            </Link>
            <div>
            <input type="button" onclick="location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';" value="Report" />
            </div>
        </div>
    )
}

export default Home