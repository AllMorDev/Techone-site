import Image from 'next/image'
import styles from './marcas.module.css'
import Svart from './assets/svart.png'
import Code from './assets/code-novo.png'
import Techone from './assets/techone-novo.png'
import Thork from './assets/Thork.png'

export default function Marcas() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>
                    NOSSAS MARCAS
                </p>
                <p className={styles.text}> 
                    Foi pensando em inovação que surgiram mais duas marcas: a Svart e a Code. 
                    Junto com a Tech One, elas formam uma tríade que leva conforto,segurança e 
                    praticidade aos veículos e seus passageiros, facilitando o dia a dia dos 
                    usuários.
                </p>
            </div>
            <div className={styles.marcas}>
                <div className={styles.contentMarcas}>
                    <a className={styles.link} href="/">
                        <Image className={styles.logo} alt='Svart' src={Svart} />
                    </a>
                    <p className={styles.textMarcas}>
                        Destinada exclusivamente ao segmento de som automotivo, com cabos resistentes 
                        e duráveis, e rádios que superam a eficiência do sinal de produtos originais 
                        de fábrica, dentre outros itens necessários para equipar um veículo com um 
                        surpreendente projeto de som.
                    </p>
                </div>
                <div className={styles.contentMarcas}>
                    <a className={styles.link} href="/">
                        <Image className={styles.logo} alt='Svart' src={Techone} />
                    </a>
                    <p className={styles.textMarcas}>
                        Marca premium, com dedicação total ao desenvolvimento de produtos de alta tecnologia, 
                        qualidade e durabilidade, sendo bicampeã do prêmio Marca Brasil na categoria de 
                        sensores de estacionamento e campeã na categoria de câmeras de ré.
                    </p>
                </div>
                <div className={styles.contentMarcas}>
                    <a className={styles.link} href="/">
                        <Image className={styles.logo} alt='Svart' src={Code} />
                    </a>
                    <p className={styles.textMarcas}>
                        Grande linha de peças e acessórios com excelente custo-benefício. Mantém alta a qualidade 
                        dos seus produtos, seguindo o padrão exigido pelo mercado e conservando a segurança dos 
                        itens sob sua chancela.
                    </p>
                </div>
                <div className={styles.contentMarcas}>
                    <a className={styles.link} href="/">
                        <Image className={styles.logo} alt='Svart' src={Thork} />
                    </a>
                    <p className={styles.textMarcas}>
                        Marca de peças e acessórios que busca a melhor relação custo x benefício, para mercados 
                        que tem foco em baixo custo.
                    </p>
                </div>
            </div>
        </div>
    )
}