import Head from 'next/head'
import Image from 'next/image'
import log from '../../public/pictures/rmlogo.png'
import logo from '../../public/pictures/logo2.png'

import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import MainMenu from '../MainMenu/MainMenu'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

export default function PageLayout({ children, title = 'RM Pelaez' }) {//this will receive children, ad title that will havae a default value 
    return (
        <>
            <Head>
                <title>RM PELAEZ</title>
                <meta name="description" content="RM Pelaez" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="page-header">
                <div className="page-header-logo">

                    <Link className="page-header-logo-link" href="/">
                        <Image
                            className="page-header-logo-image"
                            src={log}
                            alt="Pelaez Logo"
                            width="250"
                            height="100"
                        />
                    </Link>
                    <Link className="page-header-logo-link" href="/">
                        <Image
                            className="page-header-logo-image1"
                            src={logo}
                            alt="Pelaez Logo"
                            width="100"
                            height="100"
                        />
                    </Link>
                </div>
                <button
                    type="button"
                    className="page-header-menu-toggle"
                //onClick={this.openMenu}
                >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <MainMenu
                // className="page-menu"
                // closeBtnHandler={this.closeMenu}
                // menuClickHandler={this.handleClick}
                />
            </header>
            <main>
                <Hero />

                {children}
            </main>
            <Footer />
        </>
    )
}