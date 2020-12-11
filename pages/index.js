import Link from 'next/link';

function Home() {
    return (
        <div>
<<<<<<< HEAD
            <h4>Página Inicial</h4>
            <Contador />
            <div>Teste</div>
=======
            <h1>Home</h1>

            <Link href="/sobre">
            <a>Acessar página Sobre</a>
            </Link>
            <Link href="/tempo">
            <a>Acessar página Tempo</a>
            </Link>
            
            <div>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Report</a>
            </div>
>>>>>>> adb366787f424a2541293517cd3e8511b0632651
        </div>
    )
}

export default Home