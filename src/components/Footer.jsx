
import '../assets/style/footer.css'
/* import Facebook from '../../public/img/Facebook.svg'
import Twitter from '../../public/img/twitter.svg'
import Youtube from '../../public/img/youtube.svg' */
import Facebook from '../assets/img/Facebook.svg'
import Twitter from '../assets/img/twitter.svg'
import Youtube from '../assets/img/youtube.svg'

function Footer() {
    return (
        <footer>
            <div className='subTitulos'>
            <h2>ACE-SPORTS</h2>  
            <h2 className='subH4'>Sobre Nostros</h2>    
            <h2 className='subH2'>Redes Sociales</h2>
            </div>
            <div className="textos">
            <h3>Somos Ace-Sports</h3>
            <p>Somos una pagina de deportes con las ultimas <br /> y mejores noticias del mundo del deporte, no <br /> 
            olvides seguinos en todas nuestras redes sociales</p>
            <div className="redesSociales">
            <a href=""><img src={Facebook}/></a>
            <a href=""><img src={Twitter}/></a>
            <a href=""><img src={Youtube}/></a>
            </div>
            </div>
            <div className='copy'>
                <p>© 2022 Isaí González / Todos los derechos reservados</p>
            </div>

        </footer>
      );
}

export default Footer;