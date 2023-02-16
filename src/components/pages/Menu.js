import styles from './Menu.module.css'
import mini from '../../img/tabuacompleta.jpeg'
import risoto from '../../img/risotodefilemignon.jpg'
import escondidinho from '../../img/escondidinho.jpg'
import penne from '../../img/penne-aos-quatro-queijos.jpg'
import pepsi from '../../img/pepsi.jpg'
import coca from '../../img/cocacola.png'
import guarana from '../../img/guaranajpg.jpg'
import aguaGas from '../../img/aguacgas.png'
import aguaS from '../../img/aguaS.jpg'

function Menu(){
    return (
        <section className={styles.menu}>
            <div className={styles.subMenu}>
                <p><a href='#entrada'>Entrada</a></p>
                <p><a href='#jantar'>Jantar</a></p>
                <p><a href='#bebidas'>Bebidas</a></p>
            </div>
            <h1 id="entrada">Entrada</h1>
            <div className={styles.menu_Entrada}>
                <article className={styles.entrada}>
                    <img src={mini} alt="miniHamburguer" />
                    <strong>Mini hambúrguer com salame</strong>
                </article>
                <article className={styles.entrada}>
                    <img src={mini} alt="espetinhos" />
                    <strong>Espetinhos de frios</strong>
                </article>
                <article className={styles.entrada}>
                    <img src={mini} alt="bolinhas" />
                    <strong>Bolinhas de queijo</strong>
                </article>
                <article className={styles.entrada}>
                    <img src={mini} alt="maionese" />
                    <strong>Maionese temperada</strong>
                </article>
            </div>
            <h1 id="jantar">Jantar</h1>
            <div className={styles.menu_Jantar}>
                <article className={styles.janta}>
                    <img src={penne} alt="penne" />
                    <strong>Massa penne aos quatro queijos</strong>
                </article>
                <article className={styles.janta}>
                    <img src={escondidinho} alt="escondidinho" />
                    <strong>Escondidinho de carne</strong>
                </article>
                <article className={styles.janta}>
                     <img src={risoto} alt="risoto" />
                    <strong>Risoto de file mignon</strong>
                </article>
            </div>
            <h1 id="bebidas">Bebidas</h1>
            <div className={styles.menu_Bebidas}>
                <article className={styles.bebidas}>
                    <img src={coca} alt="coca" />
                    <strong>Coca-Cola</strong>
                </article>
                <article className={styles.bebidas}>
                    <img src={pepsi} alt="pepsi" />
                    <strong>Pepsi</strong>
                </article>
                <article className={styles.bebidas}>
                    <img src={guarana} alt="guarana" />
                    <strong>Guaraná</strong>
                </article>
                <article className={styles.bebidas}>
                    <img src={aguaGas} alt="aguaGas" />
                    <strong>Água com gás</strong>
                </article>
                <article className={styles.bebidas}>
                    <img src={aguaS} alt="aguaS" />
                    <strong>Água sem gás</strong>
                </article>
            </div>
        </section>
    )
}

export default Menu