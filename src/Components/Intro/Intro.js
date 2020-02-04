import React from 'react';

import css from './Intro.module.css';


const Intro = () => {

    return(

        <div className={css.IntroDiv}>
            <h2>Hello I'm Gabriel</h2>
            <p>
                A newly graduate from Argentina that is on his way
                to become a MERN stack<br/>
                This year I fully dedicated to improve my Front End skills
                through continuously coding during endless nights <br/>
                As a result of this on the next section there are some of the
                relevant projects I have achieved in the course of the year.
            </p>
        </div>
    );

}

export default Intro;