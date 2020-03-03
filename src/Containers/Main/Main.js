import React, {Component}from 'react';

import ReactDOM from 'react-dom'


import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import Intro from '../../Components/Intro/Intro';
import Skills from '../../Components/Skills/Skills';
import Form from '../../Components/Form/Form';
import Footer from '../../Components/Footer/Footer';



class Main extends Component {

    constructor(props){

        super(props);

        this.homeRef = React.createRef();
        this.introRef = React.createRef();
        this.skillsRef = React.createRef();
        this.portfolioRef = React.createRef();
        this.formRef = React.createRef();

        this.scrollToContent = this.scrollToContent.bind(this);  
    }

    scrollToContent(element) {

        switch(element){
            case 'home':
                this.homeRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'intro':
                this.introRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'skills':
                this.skillsRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'portfolio':
                this.portfolioRef.current.scrollIntoView({behavior: 'smooth'});
                break;
            case 'form':
                this.formRef.current.scrollIntoView({behavior: 'smooth'});
                break;
        }
      }


    render() {

        // console.log(this.formRef)

        return(

            <div>
            
                <Header goToComponent={this.scrollToContent}>
                    
                </Header>

                <div ref={this.homeRef}>
                    <Home>
                    </Home>
                </div>
                
                {/* <div ref={this.introRef}>
                    <Intro>
                    </Intro>
                </div> */}

                <div ref={this.introRef}>
                    <Intro >

                    </Intro>        
                </div>
                
                

                <div ref={this.skillsRef}>
                    <Skills>
                    </Skills>
                </div>
                

                <div ref={this.formRef}>
                    <Form>
                    </Form>
                </div>
               

                <Footer>
                </Footer>
            </div>
        );//end return
    }//end render
}//end class

export default Main;