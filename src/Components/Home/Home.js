import React from 'react';

import css from './Home.module.css';

const Home = () => {
    // src\Utils\profilePic.jpg
    // src\Components\Home\Home.js

    return(

        <div className={css.HomeMain}>

            <img src={require('../../Utils/profilePic.jpg')} alt="profile pic"></img>    
           
            <h1 className={css.HomeH1}>Gabriel Numa Parreño</h1>
            <h2 className={css.HomeH2}>Programmer - Front End Developer</h2>
        </div>
    );
}

export default Home;