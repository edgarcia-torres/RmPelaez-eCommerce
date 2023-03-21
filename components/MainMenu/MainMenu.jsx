import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import {
    Box,
    Menu,
    MenuItem,
    ListItemIcon,
} from "@mui/material";

import { toast } from "react-toastify";
//import profilePlaceholder from "../../assets/images/profilePlaceholder.png";
//import { connect } from "react-redux";
//import { setLogin, setLogout } from "../../store/auth";


import logo from '../../public/pictures/roundLogo.png'

class MainMenu extends React.Component {

    render() {

        return (
            <>
                <nav className="main-nav">
                    <div className="main-nav-header">
                        <div className="main-nav-logo">
                            <Link
                                className="main-nav-logo-link"
                                href="/"
                            // onClick={this.props.menuClickHandler}
                            >
                                <Image
                                    width="100"
                                    height="100"
                                    className="main-nav-logo-image"
                                    src={logo}
                                    alt="Pelaez Logo"
                                />
                            </Link>

                        </div>
                        <button
                            className="main-nav-header-close-btn"
                        //onClick={this.props.closeBtnHandler}
                        >
                            <img src="rmlogo.png" alt="Close menu"></img>
                        </button>
                    </div>
                    <ul
                        className="main-nav-menu-list"
                    // style={{
                    //   display: this.props.menuOpen ? "block" : "flex",
                    //   alignItems: "center",
                    // }}
                    >
                        <li className="main-nav-menu-list-item">
                            <Link href="/"
                            //onClick={this.props.menuClickHandler}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="main-nav-menu-list-item">
                            <Link href="/"
                            //onClick={this.props.menuClickHandler}
                            >
                                Nosotros
                            </Link>
                        </li>
                        <li className="main-nav-menu-list-item">
                            <Link href="/"
                            // onClick={this.props.menuClickHandler}
                            >
                                Productos
                            </Link>
                        </li>
                        <li className="main-nav-menu-list-item">
                            <Link href="/" //onClick={this.props.menuClickHandler}
                            >
                                FAQS
                            </Link>
                        </li>
                        <li className="main-nav-menu-list-item">
                            <Link href="/" //onClick={this.props.menuClickHandler}
                            >
                                Contactanos
                            </Link>
                        </li>
                        <li className="main-nav-menu-list-item">
                            <Link href="/"
                            //onClick={this.props.menuClickHandler}
                            >
                                Ubicacion
                            </Link>
                        </li>

                        <li className="main-nav-menu-list-item">
                            <div>
                                {/* {userData.id && isLogin ? (
                                    <Image
                                        //            onClick={this.handleClick}
                                        roundedCircle
                                        src={
                                            userData.photo !== ""
                                                ? userData.photo
                                                : profilePlaceholder
                                        }
                                        width="35"
                                        height="35"
                                        alt="logo"
                                        className={""}
                                    />
                                ) : (
                                    <strong
                                        className={"login-label"}
                                        style={{ color: "white" }}
                                    // onClick={this.open}
                                    >
                                        <Box
                                            style={{
                                                paddingLeft: "20px",
                                            }}
                                        >
                                            <img src={porfilen} height="35px" width="35px" alt="profile logo" />
                                        </Box>
                                    </strong>
                                )} */}
                            </div>
                        </li>
                    </ul>
                </nav>

            </>

        )
    }

}

export default MainMenu;