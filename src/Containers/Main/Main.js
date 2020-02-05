import React, {Component}from 'react';


import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import Intro from '../../Components/Intro/Intro';
import Skills from '../../Components/Skills/Skills';
import Form from '../../Components/Form/Form';
import Footer from '../../Components/Footer/Footer';



class Main extends Component {

    constructor(props){

        super(props);

        this.formRef = React.createRef();
        // this.handleClick = this.handleClick.bind(this);  
    }


    render() {

        console.log(this.formRef)

        return(

            <div>
                {/* <Header formRefProp={(e) => this.handleSubmit(e)}>
                </Header> */}

                <Header formRefProp={this.formRef}>
                    
                </Header>

                <Home>
                </Home>

                <Intro>
                </Intro>

                <Skills>
                </Skills>

                <Form ref={this.formRef}>
                </Form>

                <Footer>
                </Footer>
            </div>
        );//end return
    }//end render
}//end class

export default Main;