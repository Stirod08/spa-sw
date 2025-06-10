import Image from "next/image";
import Header from "./ux/layout/Header";

export default function Home() {
  return (
    <>
     <Header/>
     <main>
      <div className="h-[300px] bg-blanco"></div>
      <div className="h-[300px] bg-blanco"></div>
      <div className="h-[300px] bg-blanco"></div>
      <div className="h-[300px] bg-blanco"></div>
     </main>
    </>
  )
}
