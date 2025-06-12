import Link from "next/link"

type PropsBoton = {
    color:string,
    hover:string,
    text:string,
    link:string
}

export default function Boton({color,hover,text,link}:PropsBoton) {

    return(
        <>
        <Link className={`bg-${color} hover:bg-${hover} text-blanco font-bold px-4 py-2 rounded transition-colors duration-300`} href={link}>{text}</Link>
        </>
    )
}