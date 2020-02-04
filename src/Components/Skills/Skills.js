import React from 'react';

import css from './Skills.module.css';


const Skills = () => {

    return(

        <div className={css.SkillsMain}>
            <div className={css.SkillsList}>
                <h3 className={css.SkillsH3}>Skills</h3>
                <ul>
                    <li>Javascript, ES6</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Axios</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Comming </li>
                    <li>soon:    
                        <ul>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li> MongoDB</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={css.ToolsList}>
                <h3 className={css.SkillsH3}>Tools</h3>
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Atom</li>
                    <li>Postman</li>
                    <li>Xammp</li>
                    <li>Git</li>
                </ul>
            </div>

            <div className={css.InterestsList}>
                <h3 className={css.SkillsH3}>Interests</h3>
                <ul className={css.InterestsUl}>
                    <li>Java</li>
                    <li>Python</li>
                    <li>AI</li>
                    <li>Guitar Playing</li>
                    <li>Poetry</li>
                    <li>Movies</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;