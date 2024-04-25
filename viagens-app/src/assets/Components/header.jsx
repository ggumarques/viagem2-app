import Styles from './header.module.css';
import Logo from './img/logo.png';
import Lupa from './img/lupa.png';

function Header() {
    return(
        <header className={Styles.menu}>
            <nav className={Styles.navRight}>
                <div>
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <nav className={Styles.navCenter}>
                <p>Home</p>
                <p>Escócia</p>
                <p>Grand Canyon</p>
                <p>Mulharas da China</p>
                <p>Aruba</p>
            </nav>
            <nav className={Styles.navLeft}>
                <input type="text" />
                <img className={Styles.Busca} src={Lupa} />
            </nav>
        </header>  
    )
}
export default Header;