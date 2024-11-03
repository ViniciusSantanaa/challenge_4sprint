import styles from "@/app/login/page.module.css"
import Cadastro from "@/components/Cadastro/Cadastro"
import { Formulario } from "@/components/Formulario/Formulario"


export default function Login(){
    return(
        <>
            <main className={styles.fundo}>
                <Cadastro />
            </main>
        </>
    )
}