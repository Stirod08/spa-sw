import Link from "next/link";

export default function Boton({ url, title }: { url: string, title: string }) {
  return (
    <>
        <Link className="mt-4 bg-Dorado_elegante py-2 px-4 rounded-xs text-Texto_principal font-bold hover:bg-amber-400" href={url}>{title}</Link>
    </>
  );
}