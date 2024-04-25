// import Logo from './img/logo.png'
import Styles from './ComponentsProps.module.css'

function ComponentsProps({lugar, texto, bandeira, }){
    return(
        <div className={Styles.corpo_texto}>
            <h2>Venha explorar esse lugar incrivel!!! Venha conhecer {lugar}</h2>
            <p>{texto} </p>
            <img className={Styles.imagem} src={bandeira} alt="bandeira" />
        </div>


    )
}
export default ComponentsProps;