import Image from "next/image"
import a from "@/assets/civic-site.png"
import styles from "@/components/Card/Card.module.css"

interface LayoutCard {
    nome?: string
    RM?: string
    turma?: string
    imagem_criador: string
}

export const Card: React.FC<LayoutCard> = ({ nome, RM, turma, imagem_criador }) => {
    return (
        <div className={styles.fundo_card}>
            <Image src={imagem_criador} alt={"Imagem do criador"} width={200} height={200} className={styles.imagem}/>
            <p className={styles.descricao}>{nome}</p>
            <p className={styles.descricao}>{RM}</p>
            <p className={styles.descricao}>{turma}</p>
        </div>
    );
};