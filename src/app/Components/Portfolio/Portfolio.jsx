import Image from "next/image"
import styles from "./portfolio.module.css"
import Produtos from './Assets/portfolio.webp'


export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>
                    NOSSO PORTFÓLIO 
                </p>
                <p className={styles.text}> 
                    Segurança e proteção para você e seu carro.
                </p>
            </div>
            <Image className={styles.image} alt="PortFolio" src={Produtos} />
        </div>
    )
}
