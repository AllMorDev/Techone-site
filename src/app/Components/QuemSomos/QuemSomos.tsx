import Image from "next/image"
import styles from './QuemSomos.module.css'
import QuemSomosImage from './Assets/QuemSomos.webp'
import Anos from './Assets/17Anos.webp'
import Paises from './Assets/paises.webp'
import Salao from './Assets/salao.webp'
import Palheta from './Assets/palheta.webp'
import Lampada from './Assets/lampada.webp'
import SGS from './Assets/sgs.png'
import Inmetro from './Assets/inmetro.png'
import roHS from './Assets/roHS.png'
import Dot from './Assets/dot.webp'
import FC from './Assets/FC.png'
import CE from './Assets/CE.png'
import E4 from './Assets/E4.png'
import IP67 from './Assets/IP67.png'

export default function QuemSomos() {
    return (
        <div className={styles.container}>
            <Image className={styles.quemSomos} alt="Quem somos" src={QuemSomosImage} />
            <div className={styles.historia}>
                <div className={styles.contentHistoria}>
                    <p className={styles.titleContent}>
                        2006 - ∞
                    </p>
                    <p className={styles.textContent}> 
                        Fundada em 2006, a Tech One está há 17 anos no mercado e é a maior marca fabricante 
                        de peças e acessórios automotivos da América Latina, contando com itens de energia, 
                        multimídia, iluminação, sinalização, segurança, ferramentas, reposição, áudio e vídeo 
                        para carros, caminhões e motos.
                    </p>
                </div>
                <Image className={styles.Image} src={Anos} alt="17 anos" />
            </div>
            <div className={styles.historia} style={{background: '#EAEDEE'}}>
                <Image className={styles.Image} src={Paises} alt="+18 países" />
                <div className={styles.contentHistoria} style={{alignItems: 'flex-end'}}>
                    <p className={styles.titleContent40}>
                        18 PAÍSES
                    </p>
                    <p className={styles.textContent} style={{textAlign: 'right'}}>
                        A marca está em 18 países, entre os continentes Americanos e Europeu, com forte presença em
                        Portugal. Nas redes sociais, somos a maior marca de peças e acessórios automotivos, batendo 
                        marcas globais europeias do segmento de peças e acessórios automotivos muito mais antigas, 
                        com mais de 300 mil seguidores.
                    </p>
                </div>
            </div>
            <div className={styles.historia}>
                <div className={styles.contentHistoria}>
                    <p className={styles.titleContent40} style={{textAlign: 'left', whiteSpace: 'nowrap'}}>
                        PRESENÇA NAS FEIRAS
                    </p>
                    <p className={styles.textContent}> 
                        A Tech One participa em média de 17 feiras e eventos como expositora no Salão do Automóvel, 
                        o maior evento da indústria automobilística do Brasil; no Sema Show, principal feira de negócios 
                        automotivos dos Estados Unidos, que permite que os fabricantes de equipamentos e acessórios 
                        automotivos se exibam ao lado dos fabricantes de automóveis; e outras grandes feiras nacionais 
                        como a Automec, Autonor, Autop, Autopar, Centro Parts e Enan.
                    </p>
                </div>
                <Image className={styles.Image} src={Salao} alt="Salão do Automóvel" />
            </div>
            <div className={styles.Certificacao}>
                <div className={styles.contentCertificacao}>
                    <p className={styles.titleContentCertificado}>
                        CERTIFICAÇÕES
                    </p>
                    <p className={styles.textContentCertificado}> 
                        Os produtos Tech One são certificados por órgãos nacionais e internacionais, que provam a qualidade
                        reconhecida dos produtos. No total são 7 certificações: CE de Conformidade Europeia; dupla certificação 
                        nas lâmpadas com E4 e SGS Inmetro; Rhos que regula as substâncias perigosas; DOT do Departamento 
                        de Trânsito dos EUA; FCC, também americano; e IP67 nas câmeras, retrovisores e sensores, produtos 
                        resistentes à água e premiados como os melhores do Brasil.
                    </p>
                </div>
                <div className={styles.certificados}>
                    <Image className={styles.certificadoImage} alt="SGS" src={SGS} />
                    <Image className={styles.certificadoImage} alt="Inmetro" src={Inmetro} />
                    <Image className={styles.certificadoImage} alt="roHS" src={roHS} />
                    <Image className={styles.certificadoImage} alt="Dot" src={Dot} />
                    <Image className={styles.certificadoImage} alt="FC" src={FC} />
                    <Image className={styles.certificadoImage} alt="CE" src={CE} />
                    <Image className={styles.certificadoImage} alt="E4" src={E4} />
                    <Image className={styles.certificadoImage} alt="IP67" src={IP67} />

                </div>
            </div>
            <div className={styles.historia}>
                <div className={styles.contentHistoria}>
                    <p className={styles.titleContent40}>
                        DESENVOLVIMENTO
                    </p>
                    <p className={styles.textContent}> 
                        Todas as três marcas passam por um processo de maturação que engloba: pesquisa de mercado, 
                        desenvolvimento do produto, relacionamento com fornecedores, qualidade, distribuição, logística,
                        marketing, garantia e o relacionamento com os consumidores finais. Etapas estas que contam com a
                        integração e dedicação de equipes que estão sempre atentas ao mercado e buscam o crescimento e o 
                        destaque cada vez maiores da Tech One, da Svart e da Code no aftermarket automotivo.
                    </p>
                </div>
                <Image className={styles.Image} src={Palheta} alt="Palheta" />
            </div>
            <div className={styles.historia} style={{background: '#EAEDEE'}}>
                <Image className={styles.Image} src={Lampada} alt="+18 países" />
                <div className={styles.contentHistoria} style={{alignItems: 'flex-end'}}>
                    <p className={styles.titleContent40}>
                        INOVAÇÃO
                    </p>
                    <p className={styles.textContent} style={{textAlign: 'right'}}>
                        Inovar é uma das ações primordiais da marca que está sempre atenta à evolução do mercado de peças 
                        e acessórios automotivos. Seja por meio do upgrade de suas linhas ou pelo desenvolvimento de novos 
                        produtos e marcas, a Tech One se dedica em ampliar as oportunidades de bons negócios com seus parceiros, 
                        garantindo geração de valor e sustentabilidade do negócio para todas as partes envolvidas.
                    </p>
                </div>
            </div>
        </div>
    )
}
