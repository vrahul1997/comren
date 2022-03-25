import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <nav className={styles.navbar_container + ' navbar  navbar-expand-lg navbar-light'}>
                <div className="container-fluid">
                    <div className={styles.comren_image_container + ' col-6'}>
                        <Link href="/#">
                            <img
                                className={styles.comren_image + ' navbar-brand'}
                                src="/common/comren.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div
                        className={styles.menu_icon_container}
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-12">
                            <div className={styles.comren_nav_items_div + ' col-3'}>
                                <Link href="/#aboutRef">
                                    <button className={styles.nav_items_button}>
                                        <span>About</span>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.comren_nav_items_div + ' col-3'}>
                                <Link href="https://glacial-caverns-39747.herokuapp.com/admin">
                                    <button className={styles.nav_items_button}>
                                        <span>Admin</span>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.comren_nav_items_div + ' col-3'}>
                                <Link href="/Publications">
                                    <button className={styles.nav_items_button}>
                                        <span>Research</span>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.comren_nav_items_div + ' col-3'}>
                                <a
                                    href="https://crdig.ulaval.ca/ecole-internationale-en-leves-hydrographiques/?lang=en"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <button className={styles.nav_items_button_fall_school}>
                                        <span>Fall-School</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
