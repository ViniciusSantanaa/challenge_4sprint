import styles from './page.module.css'
import mulher_dirigindo from "@/assets/mulher.dirigindo.jpg"
import Vantagens from '@/components/Vantagens/Vantagens'
import carro from "@/assets/civic-site.png"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className={styles.slogan_imagem}>
        <h1 className={styles.slogan}> Seu carro é mais do que apenas um meio de transporte, é um investimento valioso.</h1>
        <Image src={mulher_dirigindo} alt='mulher dirigindo' className={styles.imagem_mulher}/>
      </div>

      <div className={styles.fundo}>
        <h1 className={styles.guardian}>Guard<strong className={styles.guardian_IA}>IA</strong>n e suas vantagens</h1>
        <Vantagens />
      </div>

      <div className={styles.div_texto}>
        <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam labore laboriosam, ab molestias, nesciunt recusandae quaerat aspernatur eaque ratione laborum numquam aliquam unde. Laboriosam aut doloribus quod recusandae nostrum quaerat.</p>
        <Image src={carro} alt='carro' className={styles.img_carro}/>
      </div>

    </main>
  )
}
