import { Formulario } from "@/components/Formulario/Formulario";
import styles from "@/app/orcamento/page.module.css"
import { Card } from "@/components/Card/Card";
import freio from "@/assets/freio_carro.jpg"
import vela from "@/assets/vela_ignicao.jpg"
import bateria from "@/assets/bateria_carro.jpeg"

export default function Orcamento(){
    return(
        <>
        <main className={styles.main}>

            <div className={styles.div_problema}>
                <h1 className={styles.problema}>Peças que normalmente dão problemas</h1>
                <Card imagem_criador={freio} texto1="Disco de freio" texto2="Valor: R$150 a R$500 cada" />
                <Card imagem_criador={vela} texto1="Vela de ignição" texto2="Valor: R$20 a R$50 cada" />
                <Card imagem_criador={bateria} texto1="Bateria de carros" texto2="Valor: R$300 a R$600" />
            </div>

            <Formulario titulo='Faça seu orçamento'>
                <form>
                    <div className={styles.div_form}>
                        <input
                            type="text"
                            placeholder="   Digite o nome da peça"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.div_form}>
                        <input
                            type="text"
                            placeholder="   Descreva o problema"
                            className={styles.input}
                            />
                    </div>
                    <div className={styles.div_form}>
                        <button type="submit" className={styles.button}>Analisar</button>
                    </div>
                </form>
            </Formulario>

        </main>
        </>
    )
}