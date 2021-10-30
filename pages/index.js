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
            <br/>
            <Link href="/lorem">
                <a>Lorem</a>
            </Link>
            
            <div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Report</a>
            </div>
        </div>
    )
}

export default Home