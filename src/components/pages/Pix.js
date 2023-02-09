import styles from './Pix.module.css'
import pix from '../../img/pix.jpg'


function Pix(){
    return(
        <section className={styles.pix}>
            <h1>PIX QR CODE</h1>
            <img class="animate__animated animate__rotateIn animate__delay-1s 1s" src={pix} alt="pix" />
            <p class="animate__animated animate__rotateIn animate__delay-2s 2s">Chave pix (Celular): <strong>51 984597510</strong></p>
        </section>
        )
}

export default Pix