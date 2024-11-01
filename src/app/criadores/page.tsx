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
                <Card imagem_criador={Felipe} nome={"Felipe Rosa Peres"} RM={"RM 557636"} turma={"1TDSPX"} />

                <Card imagem_criador={Vinicius} nome={"Vinícius de Souza Sant Anna"} RM={"RM 556841"} turma={"1TDSPX"} />

                <Card imagem_criador={Pedro} nome={"Pedro Henrique De Souza"} RM={"RM 555533"} turma={"1TDSPX"} />
            </main>
            
            <div className={styles.ajuste_repo}>
                <Link href="https://github.com/ViniciusSantanaa/challenge_4sprint.git" className={styles.repo}>Repositório</Link>
            </div>
        </>
    )
}