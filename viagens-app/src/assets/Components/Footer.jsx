import Styles from './Footer.module.css'
import Tik from './img/tiktok.png'
import Face from './img/face.png'
import Insta from './img/insta.png'
import Whats from './img/whatsapp.png'

function Footer(){
    return(
        <footer>
            <h3>Siga-nos em nossas redes sociais</h3>
            <div className={Styles.imagens}>
                <img src={Tik} alt="" />
                <img src={Face} alt="" />
                <img src={Insta} alt="" />
                <img src={Whats} alt="" />
            </div>
            <h3>Telefone de Contato: (11) 4002-8922</h3>
        </footer>
    )
}
export default Footer;