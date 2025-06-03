export default function Parallax({url}: {url: string}) { //{url} --> Este es el promp a utilizar, se pueden agregar más si se desea. 

    return (
        <>
            <div className="h-[350px] bg-cover bg-no-repeat bg-top bg-fixed"
            style={{backgroundImage:`url(image/${url}.jpg)`}}>
                
            </div>
        </>
    )
}