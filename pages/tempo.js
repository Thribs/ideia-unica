import Link from 'next/link'

function Tempo(props) {
    console.log("> Passando pelo Frontend;")
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
            <h4>{props.staticDateString} (estático)</h4>
        </div>
    )
}

export async function getStaticProps() {
    console.log("> Passando pelo getStaticProps;")
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;