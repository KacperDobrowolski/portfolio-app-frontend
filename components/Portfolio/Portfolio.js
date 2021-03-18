import styles from './Portfolio.module.scss';
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Project from '../Project/Project';
import axios from "axios";

const Portfolio = () => {
    const [ projects, setProjects ] = useState();

    useEffect( async () => {
        const res = await axios("http://localhost:8080/api/projects");
        setProjects(res.data);
    }, []);
    if(projects == undefined) {
        return <div>Loading ...</div>
    }
    return (
        <section className={styles.portfolio}>
            <h2 className={styles.portfolio_headline}>Moje projekty</h2>
            <div className={styles.portfolio_options}>
                <ul className={styles.portfolio_list}>
                    <li className={styles.list_item}>Wszystkie</li>
                    <li className={styles.list_item}>Ukończone</li>
                    <li className={styles.list_item}>Nieukończone</li>
                </ul>
            </div>
            <div className={styles.projects_list}>
                { projects.data.map(project => {
                    return <div className={styles.list_item} key={project._id}>
                        <Project name={project.name} url={project.url} image={"/assets/images/header.jpg"} />
                    </div>
                }) }
            </div>
            <Button text="Zobacz więcej" color={false}/>
        </section>
    )
}

export default Portfolio;