import styles from './Home.module.css';

function Home(){
    return(
        <section className={styles.home_container}>
            <h1 class="animate__animated animate__heartBeat animate__duration 2s animate__repeat-3 3 " >Bem-vindo!</h1>
            <h2 class="animate__animated animate__zoomInLeft animate__slow 2s">Esperamos que você esteja gostando de tudo até aqui!!!<br/></h2>
            <p class="animate__animated animate__zoomInLeft animate__delay-1s 1s animate__slow 2s">Estamos disponibilizando por aqui o<a href="/menu"> Menu do Evento</a>, onde estão as informações dos pratos e bebidas que irão passar durante a noite.</p>
            <p class="animate__animated animate__zoomInLeft animate__delay-1s 1s animate__slow 2s">Teremos também um momento onde será passado nas mesas um sapato. Há um costume de passar este sapato com o intuito de levantar uma graninha aos noivos para curtirem a lua de mel. Para aqueles que não costumam andar com dinheiro em espécie, estamos disponibilizando o <a href="/pix">Pix</a>.</p>
             {/* <img src={homeNeV} alt="Principal"/> */}
        </section>
    )
}

export default Home