import '../assets/style/header.css'

function Header() {
  return (
    <>
    <header className='header'>
    <nav>
      <h2 className='logo'><a href="">Ace-Sports</a></h2>
       <ul className='nav-links'>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contactanos</a></li>
       </ul>  
       <button type='buttom'>Iniciar Sesión</button>          
    </nav>
    </header>
    </>    
  );
}
export default Header;
