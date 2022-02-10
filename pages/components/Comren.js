import React from 'react';
import styles from './Comren.module.css';
import { COMRENMEMBERS } from '../../lib/constants';

const Comren = () => {
    return (
        <div className={styles.comren_container}>
            <h1 id="aboutRef" className={styles.comren_heading}>
                COMREN NETWORK
            </h1>
            <p className={styles.comren_divider}>________</p>
            <div className={styles.content_container + ' row'}>
                <div className={styles.comren_content + ' col-lg-8'}>
                    <p>
                        CRDIG is a founding member of the Canadian Hydrographic Research and
                        Education Network (RéCREH / COMREN).
                    </p>
                    <p>
                        This network aims to develop research activities, achieve technology
                        transfer, develop and strengthen teaching programs and increase the number
                        of graduates in the field of marine geomatics and ocean mapping.
                    </p>
                    <p>It brings together the following institutions:</p>
                    {Object.keys(COMRENMEMBERS).map((k, index) => {
                        console.log('k: ', k);
                        console.log('index: ', index);
                        return (
                            <li key={index} className={styles.comren_mem_list}>
                                <a
                                    className={styles.comren_mem_tsext}
                                    href={COMRENMEMBERS[k].univ_url}
                                >
                                    {COMRENMEMBERS[k].description}
                                </a>
                            </li>
                        );
                    })}
                </div>
                <div className={styles.comren_icon_container + ' col-lg-4'}>
                    <img className={styles.comren_icon} src="/common/comren.png" alt="" />
                </div>
            </div>
            <h3 className={styles.comren_subheading}>What is COMREN?</h3>
            <p className={styles.comren_divider}>________</p>
            <div className={styles.comren_youtube}>
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/_h8E9ff8OuU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <h3 className={styles.comren_subheading}>COMREN Student Travel Funding</h3>
            <p className={styles.comren_divider}>________</p>
            <div className={styles.comren_funding_image_container}>
                <img
                    className={styles.comren_funding_image}
                    src="/common/student_funding_comren.jpeg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Comren;
