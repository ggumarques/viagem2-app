import Styles from './Escocia.module.css'
import ComponentsProps from './ComponentsProps';
import BandEsc from './img/escocia-bandeira.jpg';

function Escocia(){
    return(
        <div className={Styles.fundo}>
            <ComponentsProps lugar="Escocia" 
            texto="Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus inventore, dolorem vitae corporis quaerat ex optio officiis. Quos magnam, exercitationem fugit ratione at nesciunt, suscipit, quis aut veniam nisi alias!" bandeira={BandEsc} />
        </div>
    )
}
export default Escocia;