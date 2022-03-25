import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import styles from './Publications.module.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Publications = ({ pub_data, project_data }) => {
    useEffect(() => {
        document.title = 'Publications';
    });

    return (
        <div>
            <Navbar />
            <h2 className={styles.publication_heading}>Publications</h2>
            {pub_data.map((pubs) => {
                return (
                    <ul key={pubs['id']} className={styles.publication_list}>
                        <li key={pubs['id']}>{pubs['publication']}</li>
                        {pubs['publication_link'] != '#' ? (
                            <a
                                href={pubs['publication_link']}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                link
                            </a>
                        ) : (
                            console.log('vj')
                        )}
                    </ul>
                );
            })}
            <h2 className={styles.publication_heading}>Projects</h2>
            {project_data.map((pubs) => {
                return (
                    <ul key={pubs['uid']} className={styles.project_list}>
                        <li key={pubs['uid']}>{pubs['project_name']}</li>
                        {pubs['publication_link'] != '#' ? (
                            <a href={pubs['project_url']} target="_blank" rel="noreferrer noopener">
                                link
                            </a>
                        ) : (
                            console.log('vj')
                        )}
                    </ul>
                );
            })}
        </div>
    );
};

export async function getStaticProps() {
    const publication_response = await axios
        .get('https://glacial-caverns-39747.herokuapp.com/comren_publications')
        .then((response) => {
            return response.data;
        });

    const project_response = await axios
        .get('https://glacial-caverns-39747.herokuapp.com/comren_projects')
        .then((response) => {
            return response.data;
        });

    return {
        props: {
            pub_data: publication_response,
            project_data: project_response,
        },
    };
}

export default Publications;
