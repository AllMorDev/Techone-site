import styles from './footer.module.css'
import Image from 'next/image'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'
import Linkedin from './assets/linkedin.svg'
import Tiktok from './assets/tiktok.svg'
import Youtube from './assets/youtube.svg'
import TechOne from './assets/logo-techone.png'
import Code from './assets/logo-code.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.menu}>
                    <p className={styles.title}>Acesso Rápido</p>
                    <a href='/'>Quem somos</a>
                    <a href='/'>Produtos</a>
                    <a href='/'>Marketing</a>
                    <a href='/'>Fale Conosco</a>
                    <a href='/'>Trabalhe Conosco</a>
                </div>
                <div className={styles.menu}>
                    <p className={styles.title}>Atendimento</p>
                    <span className={styles.atendimento}>Segunda a Quinta: 08:00hs às 18:00hs.</span>
                    <span className={styles.atendimento}>Sexta: 08:00hs às 17:00hs</span>
                </div>
                <div className={styles.menu}>
                    <p className={styles.title}>Siga-nos</p>
                    <div className={styles.menuLogos}>
                        <a target='blank' href="https://www.facebook.com/techoneline/"><Image width={50} height={50} alt='Logo Facebook' src={Facebook} /></a>
                        <a target='blank' href="https://www.instagram.com/techonebrasil/"><Image width={50} height={50} alt='Logo Instagram' src={Instagram} /></a>
                        <a target='blank' href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHUHvnAko3gAgAAAY8qQf3YlLLfKT7mgUwB-JKCV_dWf4NdVdnKwFsRKI9SmNq_rJs-h5TBhqKf1QrTY2MuvgnTrgn5KudpZvq0bZZmkF2yYSij9viAt-hUntS2VbL5R5RgQU8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftech.one%2F"><Image width={50} height={50} alt='Logo Linkedin' src={Linkedin} /></a>
                        <a target='blank' href="https://www.youtube.com/channel/UC9-8LBjow_kmHzK7Uo94PiA/videos"><Image width={50} height={50} alt='Logo Youtube' src={Youtube} /></a>
                        <a target='blank' href="https://www.tiktok.com/@techonebrasil"><Image width={50} height={50} alt='Logo Tiktok' src={Tiktok} /></a>
                    </div>
                </div>
                <iframe 
                    name="f05481eb51528eaf6" 
                    data-testid="fb:page Facebook Social Plugin" 
                    title="fb:page Facebook Social Plugin" 
                    allow="encrypted-media" 
                    src="https://web.facebook.com/v3.1/plugins/page.php?adapt_container_width=true&amp;app_id=1715029751862231&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df92344f019216a3a1%26domain%3Dtechone.com.br%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftechone.com.br%252Ff79881afaa49ac5dd%26relation%3Dparent.parent&amp;container_width=255&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ftechoneline&amp;locale=pt_BR&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" 
                    style={{border: 'none;', width: '255px;', height: '130px;'}}>
                </iframe>
            </div>
            <div className={styles.rodape}>
                <Image className={styles.image} alt='Logo Techone' src={TechOne} width={170} height={22} />
                <p className={styles.image}>© 2022 - Todos os direitos reservados Tech One.</p>
                <Image className={styles.image} alt='Logo Code' src={Code} width={170} height={22} />
            </div>
        </div>
    )
}