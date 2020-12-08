import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/sobre">
            <a>Acessar página Sobre</a>
            </Link>

            <button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Report</button>
        </div>
    )
}

export default Home