import '../assets/style/Card.css'

function Card({info,imagen}){
    return(
        <div className="card">
            <img className="img" src={imagen}/>
            <div className="cardBody">
                <span  className="info"> 
                    {info}
                </span>
            </div>
        </div>
    )
}

export default Card;