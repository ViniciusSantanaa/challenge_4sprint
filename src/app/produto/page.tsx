import styles from "@/app/produto/page.module.css"

export default function Produtos(){
    return(
        <>
        <h1 className={styles.a}>Descrição</h1>
        <p className={styles.produto}>O produto consiste em um sistema de detecção de problemas em veículos utilizando inteligência artificial e visão computacional. Os usuários podem apontar a câmera de seus dispositivos móveis para áreas específicas do veículo que desejam verificar. <br/>A imagem é então processada por um algoritmo de IA que identifica possíveis irregularidades, defeitos e problemas mecânicos. Os resultados são disponibilizados aos usuários através de um site, juntamente com recomendações para solução dos problemas detectados. Este sistema proporciona uma forma rápida e conveniente para os proprietários de veículos monitorarem a saúde de seus automóveis, ajudando a evitar danos mais graves e que podem custar caro no futuro.</p>
        </>
    )
}