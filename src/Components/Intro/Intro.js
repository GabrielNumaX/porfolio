import React from 'react';

import css from './Intro.module.css';


// const Section1 = React.forwardRef((props, ref)=>{
//     return (
//       <section ref={ref} className='section'>
//         <p>Section 1</p>
//       </section>
//     );
//   });

const Intro = () => {

    return(

        <div className={css.IntroDiv}>
            <h2>Hello I'm Gabriel</h2>
            <p>
                A newly graduate from Argentina that is on his way
                to become a MERN stack<br/>
                This past time I've fully dedicated to improve my Front End skills
                through continuously coding during endless nights <br/>
                As a result of this on the next section there are some of the
                relevant projects <br/> 
                I have achieved in the course of the year.
            </p>
        </div>
    );

};

// const Intro = React.forwardRef((props, ref) => {

//     return(

//         <div ref={ref} className={css.IntroDiv}>
//             <h2>Hello I'm Gabriel</h2>
//             <p>
//                 A newly graduate from Argentina that is on his way
//                 to become a MERN stack<br/>
//                 This past time I've fully dedicated to improve my Front End skills
//                 through continuously coding during endless nights <br/>
//                 As a result of this on the next section there are some of the
//                 relevant projects <br/> 
//                 I have achieved in the course of the year.
//             </p>
//         </div>
//     );

// });

export default Intro;