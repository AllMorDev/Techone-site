'use client'

import { useState } from "react"
import Image from "next/image"
import styles from "./header.module.css"
import Logo from "./assets/techoneLogo.png"
import Burger from "./assets/burger.svg"
import SearchIcon from "./assets/search.svg"
import SearchItem from "./assets/searchItem.svg"
import Close from "./assets/close.svg"
import Arrow from "./assets/arrow.svg"
import br from "./assets/br.png"
import es from "./assets/es.png"
import fr from "./assets/fr.png"
import pt from "./assets/pt.png"
import uk from "./assets/uk.png"

export default function Header() {
    const [showFlag, setShowFlag] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div id="targetDiv" className={styles.container}>
                {showInput && 
                    <div className={styles.backgroundTransparent}>
                        <div className={styles.containerSearch}>
                            <input className={styles.input} type="text" />
                            <Image className={styles.pesquisa} src={SearchItem} width={40} height={40} alt="Logo Techone" /> 
                            <button className={styles.buscar} style={{marginBottom: '100px', marginRight: '40px'}} onClick={() => {setShowInput(!showInput)}}>
                                <Image src={Close} width={40} height={40} alt="Botão de fechamento da barra de pesquisa" />
                            </button>
                        </div>
                    </div>
                }
                    <div className={styles.menu}>
                        <button onClick={() => {setShowMenu(!showMenu)}} className={styles.buttonBurger}>
                            <Image className={styles.burger} src={Burger} alt="Burger" /> 
                        </button>
                        <a href="/">
                            <Image className={styles.logo} src={Logo} alt="Logo Techone" /> 
                        </a>
                        <div className={styles.list}>
                            <a className={styles.textList} href="/">Início</a>
                            <a className={styles.textList} href="/produtos">Produtos</a>
                            <a className={styles.textList} href="/marketing">Marketing</a>
                            <a className={styles.textList} href="/fale-conosco">Fale Conosco</a>
                            <a className={styles.textList} href="https://drive.google.com/file/d/1o0qEgjMV0g-RVQmPDF7yWVFyg5UsbsHh/view" target="blank">Catálogo</a>
                            <a className={styles.textList} href="https://loja.mercadolivre.com.br/tech-one" target="blank">Loja</a>
                        </div>
                        <Image className={styles.search} src={SearchIcon} width={19} height={19} alt="Logo Techone"/> 
                        <button className={styles.buscar} onClick={() => {setShowInput(!showInput)}}>Buscar</button>
                        <div className={styles.bandeiras}>
                            <button onClick={() => {setShowFlag(!showFlag)}} className={styles.bandeiraPadrao} >
                                <Image src={br} width={25} height={25} alt="Logo Brasil"/>
                                <Image src={Arrow} width={20} height={20} alt="Logo flecha"/>
                            </button>
                            {showFlag === true && 
                                <div className={styles.boxFlags}>
                                    <button className={styles.bandeiraPadrao}>
                                        <Image src={es} width={25} height={25} alt="Logo Espanha"/>
                                    </button>
                                    <button className={styles.bandeiraPadrao}>
                                        <Image src={fr} width={25} height={25} alt="Logo França"/>
                                    </button>
                                    <button className={styles.bandeiraPadrao}>
                                        <Image src={pt} width={25} height={25} alt="Logo Portugal"/>
                                    </button>
                                    <button className={styles.bandeiraPadrao}>
                                        <Image src={uk} width={25} height={25} alt="Logo Reino Unido"/>
                                    </button>
                                </div>
                            } 
                        </div>
                    </div>
            </div>
            {showMenu && 
                <div className={styles.backgroundTransparentBuger}>
                    <div className={styles.containerBurger}>
                        <a className={styles.textListBurber} href="/produtos">Produtos</a>
                        <a className={styles.textListBurber} href="/marketing">Marketing</a>
                        <a className={styles.textListBurber} href="/fale-conosco">Fale Conosco</a>
                        <a className={styles.textListBurber} href="https://drive.google.com/file/d/1o0qEgjMV0g-RVQmPDF7yWVFyg5UsbsHh/view">Catálogo</a>
                        <a className={styles.textListBurber} href="https://loja.mercadolivre.com.br/tech-one" target="blank">Loja</a>
                    </div>
                </div>
            }
        </>
    )
}
