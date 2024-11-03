import styles from "@/components/Formulario/Formulario.module.css"


interface LayoutForm {
    titulo?: string,
    children: React.ReactNode
}


export const Formulario: React.FC<LayoutForm> = ({ titulo, children }) => {
    return(
        <div className={styles.fundo_form}>
            <h1 className={styles.h1}>{titulo}</h1>
            {children}
        </div>
    )
}