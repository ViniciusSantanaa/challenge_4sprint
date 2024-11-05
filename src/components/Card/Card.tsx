import styles from "@/components/Card/Card.module.css"
import Image, { StaticImageData } from "next/image"

interface LayoutCard {
    texto1?: string
    texto2?: string
    texto3?: string
    imagemCriador: StaticImageData
}

export const Card: React.FC<LayoutCard> = ({ texto1, texto2, texto3, imagemCriador }) => {
    return (
        <div className={styles.fundo_card}>
            <Image src={imagemCriador} alt={"Imagem do criador"} width={200} height={200} className={styles.imagem} />
            <p className={styles.descricao}>{texto1}</p>
            <p className={styles.descricao}>{texto2}</p>
            <p className={styles.descricao}>{texto3}</p>
        </div>
    );
};