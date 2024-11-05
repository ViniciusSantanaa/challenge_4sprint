import Vinicius from "@/assets/imagem.vinicius.jpg"
import Felipe from "@/assets/imagem.felipafa.jpg"
import Pedro from "@/assets/imagem.gemeo.jpg"
import styles from "@/app/criadores/page.module.css"
import { Card } from "@/components/Card/Card"
import Link from "next/link"

export default function Criadores(){
    return(
        <>
            <main className={styles.main}>
                <Card imagemCriador={Felipe} texto1={"Felipe Rosa Peres"} texto2={"RM 557636"} texto3={"1TDSPX"} />

                <Card imagemCriador={Vinicius} texto1={"Vinícius de Souza Sant Anna"} texto2={"RM 556841"} texto3={"1TDSPX"} />

                <Card imagemCriador={Pedro} texto1={"Pedro Henrique De Souza"} texto2={"RM 555533"} texto3={"1TDSPX"} />
            </main>
            
            <div className={styles.ajuste_repo}>
                <Link href="https://github.com/ViniciusSantanaa/challenge_4sprint.git" className={styles.repo}>Repositório</Link>
            </div>
        </>
    )
}