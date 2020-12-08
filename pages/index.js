import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre">
            <h4><a>Acessar página Sobre</a></h4>
            </Link>
            <Link href="/tempo">
            <h4><a>Acessar página Tempo</a></h4>
            </Link>
            <div>
            <button>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Report</a>
            </button>
            </div>
        </div>
    )
}

export default Home