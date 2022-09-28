import '../assets/style/noticias.css'

import not1 from '../assets/img/noticia1.jpg'
import not2 from '../assets/img/noticia2.jpg'
import not3 from '../assets/img/noticia3.jpg'
/* import Cards from './Cards' */

function Noticias(){
    return (
    <>
    <h2 className='subtitulo'>
      ¡NO TE PIERDAS LA ULTIMAS<br />
      NOTICAS DEL DEPORTE!
    </h2>
    <button className='registrar'>Regístrate Aquí</button>
    <div className='noticias'>
    <div className='noticia1'>
    <a href=""><img src={not1}></img></a> 
    <h3><a href="">El Nuevo Estadio para el Mundial Qatar 2022</a></h3>
    </div>
    <div className='noticia2'>
    <a href=""><img src={not2}></img></a> 
    <h3><a href="">Gran Premio del Motociclismo</a></h3>
    </div>
    <div className='noticia3'>
    <a href=""><img src={not3}></img></a>
    <h3><a href="">Ultimos resultados de los Partidos de NFL</a></h3>
    </div>
    </div>
    {/* <Cards></Cards> */}
    </>
    )   
}
export default Noticias;