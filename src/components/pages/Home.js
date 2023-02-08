import styles from './Home.module.css'
import homeNeV from '../../img/home.jpeg'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo!</h1>
            <h2>Se você chegou aqui, é porque está no casamento do Nathan e da Vitória!!!<br/></h2>
            <p>Estamos disponibilizando por aqui o<a href="/menu"> Menu do Evento</a>, onde estão as informações dos pratos e bebidas que irão passar durante a noite.</p>
            <p>Teremos também um momento onde será passado nas mesas um sapato. Há um costume de passar este sapato com o intuito de levantar uma graninha aos noivos para curtirem a lua de mel. Então quando chegar este momento, para aqueles que não costumam andar com dinheiro em espécie estamos disponibilizando o <a href="/pix">Pix</a> para contribuir com qualquer valor. Lembrando que não é obrigatório contribuir, apenas se você desejar!</p>
             {/* <img src={homeNeV} alt="Principal"/> */}
        </section>
    )
}

export default Home