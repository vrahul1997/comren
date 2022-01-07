import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollToComrenRef = () => {
    document.getElementById("aboutRef").scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div>
      <nav className={styles.navbar_container + " navbar  navbar-expand-lg navbar-light"}>
        <div className="container-fluid">
          <div className={styles.comren_image_container + " col-6"}>
            <img
              className={styles.comren_image + " navbar-brand"}
              href="#"
              src="/common/comren.png"
              alt=""
            />
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
              <div className={styles.comren_nav_items_div + " col-3"}>
                <button onClick={scrollToComrenRef} className={styles.nav_items_button}>
                  <span>About</span>
                </button>
              </div>
              <div className={styles.comren_nav_items_div + " col-3"}>
                <button className={styles.nav_items_button}>
                  <span>Contact</span>
                </button>
              </div>
              <div className={styles.comren_nav_items_div + " col-3"}>
                <button className={styles.nav_items_button}>
                  <span>Research</span>
                </button>
              </div>
              <div className={styles.comren_nav_items_div + " col-3"}>
                <a
                  href="https://crdig.ulaval.ca/ecole-internationale-en-leves-hydrographiques/?lang=en"
                  target="_blank"
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
