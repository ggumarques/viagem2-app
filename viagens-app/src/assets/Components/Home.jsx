import Styles from './Home.module.css'
import Mala from './img/mala2.png'

function Home(){
    return(
        <div className={Styles.fundohome}>
            <div className={Styles.esquerda}>
                <img src={Mala} alt="" />
            </div>
            <div className={Styles.direita}>
                <h2>Venha desfrutar a vida nos melhores lugares!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cum, consectetur perferendis aliquid accusantium ?</p>
                <button>Conhecer</button>
            </div>
        </div>
    )
}
export default Home;