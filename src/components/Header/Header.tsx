import Link from "next/link";
import styles from "@/components/Header/Header.module.css"

export default function Header(){
    return(
    <nav className={styles.nav}>
        <div className={styles.div_guardian}>
            <Link href="/" className={styles.guardian}>Guard<strong className={styles.strong_guardian}>IA</strong>n</Link>

            <div>
                <ul className={styles.menu}>
                    <li><Link href="/orcamento" className={styles.links}>Orçamentos</Link></li>
                    <li><Link href="/produto" className={styles.links}>Sobre o produto</Link></li>
                    <li><Link href="/criadores" className={styles.links}>Cr<strong className={styles.strong_criadores}>IA</strong>dores</Link></li>
                    <li><Link href="/login" className={styles.login}>Login</Link></li>
                </ul>
            </div>        
        </div>    
    </nav>
    )
}