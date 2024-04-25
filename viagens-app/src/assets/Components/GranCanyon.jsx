import Styles from './GranCanyon.module.css'
import ComponentsProps from './ComponentsProps';
import BandEUA from './img/eua-flag.jpg'

function GranC(){
    return(
        <div className={Styles.fundogran}>
            <ComponentsProps lugar="GranCanyon" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae dignissimos sapiente. Qui sunt dolor labore, ullam doloremque repudiandae repellendus, mollitia sequi magni temporibus, optio id in quaerat nulla explicabo." bandeira={BandEUA} />
            
        </div>
    )
}
export default GranC;