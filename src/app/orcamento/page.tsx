import { Formulario } from "@/components/Formulario/Formulario";
import styles from "@/app/orcamento/page.module.css"

export default function Orcamento(){
    return(
        <main className={styles.main}>
            <Formulario titulo='Orçamentos'>
                <form className={styles.a}>
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
    )
}