import '../assets/style/Cards.css'

function Cards(){
    const notis = [
        {
            id:1,
            info: "El Nuevo Estadio para el Mundial Qatar 2022",
            imagen: '../assets/img/noticia1.jpg'
        },
        {
            id:2,
            info:"Gran Premio del Motociclismo",
            imagen: '../assets/img/noticia2.jpg'
        },
        {
            id:3,
            info: "Ultimos resultados de los Partidos de NFL",
            imagen: '../assets/img/noticia3.jpg'
        }

    ];

    return(
        <div className="containerCards">
            {notis.map((noti) =>{
                return(
                    <Sell
                    key={noti.id}
                    info={noti.info}
                    imagen={noti.imagen}
                    />
                )
            }

            )}
        </div>
    )
}

export default Cards;