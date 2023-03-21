import Image from 'next/image'
import Link from 'next/link'
import iconLogo from "../../public/pictures/logo2.png"
import { TbBrandWhatsapp, TbMapPin } from "react-icons/tb";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Grid, Wrapper, ContactBar } from "./FooterStyles";

let newDate = new Date()
let year = newDate.getFullYear();

export default function Footer() {

    return (
        <>
            <footer id="main-footer" >
                <section id='s2'>
                    <div className='footer-s1-div' >
                        <div id="main-footer-logo">
                            <Link id="main-footer-logo-link" href="/">
                                <Image id="main-footer-logo-image" src={iconLogo} alt="Pelaez Logo" width="140" height="50"
                                />
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <p id="main-footer-text">Domicilios en Bogota y Chia</p>
                            </li>
                            <li>
                                <p id="main-footer-text">Instalacion de baterias</p>
                            </li>
                            <li>
                                <p id="main-footer-text">Revision de baterias</p>
                            </li>

                            <li>
                                <p id="main-footer-text">Repuestos electricos</p>
                            </li>
                            <li>
                                <p id="main-footer-text">Refrigerantes</p>
                            </li>

                        </ul>


                    </div>
                </section>

                <section id='s2'>

                    <div className='s2-ul-div' >

                        <div>
                            <ul>

                                <Link id='Link' href="privacy-policy" ><li><strong>Direccion: </strong> CL 131#45B-06 Prado V.</li></Link>
                                <Link id='Link' href="privacy-policy" ><li> <strong>Email: </strong> rm.pelaez@hotmail.om</li></Link>
                                <Link id='Link' href="privacy-policy" ><li><strong>Teléfonos: </strong> (57)(1) 625-0529 / 615-448</li></Link>

                                <div className='Footer-Social' >
                                    <ContactBar>
                                        <div className='contacts'>
                                            <a id="contact-icon"
                                                aria-label="Whatsapp"
                                                href="https://api.whatsapp.com/send?phone=16475706403">
                                                <TbBrandWhatsapp />
                                            </a>

                                            <a id="contact-icon"
                                                aria-label="Mail"
                                                href="mailto:edgardavidgt@gmail.com?subject=Contact us Form&cc=cc@example.com">
                                                <AiOutlineMail />
                                            </a>
                                            <a id="contact-icon"
                                                aria-label="Mail"
                                                href="mailto:edgardavidgt@gmail.com?subject=Contact us Form&cc=cc@example.com">
                                                <AiOutlinePhone class="w3-xlarge" />
                                            </a>
                                            <a id="contact-icon"
                                                aria-label="Mail"
                                                href="mailto:edgardavidgt@gmail.com?subject=Contact us Form&cc=cc@example.com">
                                                <TbMapPin />
                                            </a>
                                        </div>

                                    </ContactBar>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id='s2'>
                    <div className='s2-ul-div' >
                        <div id="phone-button">
                            <div id="main-footer-contact">
                                <a href="tel:6475706403">
                                    <span id="main-footer-contact-text">
                                        Telefono fijo
                                    </span>
                                    <br />
                                    <span id="main-footer-contact-phone">615 4486</span>
                                </a>
                            </div>
                            <div id="main-footer-contact">
                                <a href="tel:6475706403">
                                    <span id="main-footer-contact-text">
                                        Telefono Celular
                                    </span>
                                    <br />
                                    <span id="main-footer-contact-phone">+ 57 320 4000 909</span>
                                </a>
                            </div>
                            <div id="main-footer-contact">
                                <a href="tel:6475706403">
                                    <span id="main-footer-contact-text">
                                        WHATSAPP
                                    </span>
                                    <br />
                                    <span id="main-footer-whatsapp-phone">+ 57 320 4000 909</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </section>


            </footer>
            <section id='footer-s3'>
                <div className='footer-last-div' >
                    <p className='footer-last-p' >RM Pelaez © All Rights Reserved - {`${year}`}</p>
                </div>
            </section>
        </>
    )

}