import styles from './Pix.module.css'
import pix from '../../img/pix.jpg'


function Pix(){
    return(
        <section className={styles.pix}>
            <h1>PIX QR CODE</h1>
            <img src={pix} alt="pix" />
            <p>Chave pix (Celular): <strong>51 984597510</strong></p>
        </section>
        )
}

export default Pix