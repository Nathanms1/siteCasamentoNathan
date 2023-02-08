import { Link } from "react-router-dom";
import styles from './Erro.module.css'

function Erro() {
    return(
        <section className={styles.not_Found}>
            <h1>ERRO 404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Ir para página principal!</Link>
        </section>
    )
}

export default Erro