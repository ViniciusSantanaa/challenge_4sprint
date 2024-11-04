import styles from './page.module.css'
import mulher_dirigindo from "@/assets/mulher.dirigindo.jpg"
import carro from "@/assets/civic-site.png"
import Image from 'next/image'
import { Ri24HoursFill } from 'react-icons/ri'
import { FaBrazilianRealSign, FaWrench } from 'react-icons/fa6'
import { MdOutlineSpeed } from 'react-icons/md'

export default function Home() {
  return (
    <main>
      <section className={styles.slogan_imagem}>
        <h1 className={styles.slogan}>Seu carro é mais do que apenas um meio de transporte, é um investimento valioso.</h1>
        <Image src={mulher_dirigindo} alt='mulher dirigindo' className={styles.imagem_mulher}/>
      </section>

      <div className={styles.fundo}>
        <h1 className={styles.guardian}>Guard<strong className={styles.guardian_IA}>IA</strong>n e suas vantagens</h1>
        <div className={styles.container}>
            <div className={styles.item}>
                <Ri24HoursFill size="3rem" color="#6495ED"/>
                <p className={styles.frase}>Obter assistência a qualquer hora do dia ou da noite</p>
            </div>
            <div className={styles.item}>
                <FaBrazilianRealSign  size="3rem" color="#6495ED"/>
                <p className={styles.frase}>Evitar reparos mais caros no futuro ao resolver problemas menores rapidamente</p>
            </div>
            <div className={styles.item}>
                <MdOutlineSpeed size="3rem" color="#6495ED"/>
                <p className={styles.frase}>Identificar rapidamente problemas potenciais em seus veículos</p>
            </div>
            <div className={styles.item}>
                <FaWrench size="3rem" color="#6495ED"/>
                <p className={styles.frase}>Orientações sobre como realizar manutenção em seu veículo</p>
            </div>
        </div>
      </div>

      <div className={styles.div_texto}>
        <p className={styles.texto}>Com nosso Seguro Automotivo, você pode ter a tranquilidade de saber que seu investimento está protegido contra imprevistos que poderiam comprometer seu valor. Preserve o valor do seu veículo e dirija com confiança sabendo que estamos cuidando dele.</p>
        <Image src={carro} alt='carro' className={styles.img_carro}/>
      </div>

    </main>
  )
}
