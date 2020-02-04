import React, {Component}from 'react';

import css from './Form.module.css';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            feedback: '', 
            name: '', 
            email: '' 
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, name) {

        switch(name) {
            case "name":
                this.setState({name: event.target.value})
                break;
            case "email":
                this.setState({email: event.target.value})
                break;
            case "feedback":
                this.setState({feedback: event.target.value})
                break;
            default:
                return null;
        }    
      }
    
      handleSubmit () {

        const templateId = 'template_EbBWt3FZ';

        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const textarea = document.querySelector('textarea[name="mailing"]');

        if(textarea === ''){

            //aca iria el mensaje del textarea vacio
        }
    
        // this.sendFeedback(templateId, 
        //     {
        //         message_html: this.state.feedback, 
        //         from_name: this.state.name, 
        //         reply_to: this.state.email
        //     });

        

    
        nameInput.value = '';
        emailInput.value = '';
        emailInput.required = false;
        textarea.value = '';

        console.log('mail sent')
        
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render() {
        return(
            <div className={css.FormDiv}>

                <h3>Contact Me</h3>
                <form className={css.Form}>

                    <div className={css.DivName}>
                        <h5>Your Name</h5>
                        <input  type="text" 
                                name="name"
                                onChange={(e) => this.handleChange(e, 'name')}>

                        </input>
                    </div>
                   
                    <div className={css.DivEmail}>
                        <h5>Your E-mail</h5>
                        <input  type="email" 
                                name="email"
                                onChange={(e) => this.handleChange(e, 'email')}>
                                
                        </input>
                    </div>
                    
                    <div className={css.DivTextarea}>
                        <h5>Your Message</h5>
                        <textarea   name="mailing" 
                                    value={this.state.feedback} 
                                    onChange={(e) => this.handleChange(e, 'feedback')}>                   
                        </textarea>
                    </div>
                    
                    <input type="button" value="Send Message" onClick={this.handleSubmit}></input>
                </form>
                
                <h3>Social Media</h3>

                <div className={css.SocialMedia}>
                        
                    <a href="https://www.linkedin.com/in/numax" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/GabrielNumaX" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-square"></i>
                    </a>

                    <a href="https://codepen.io/NumaX" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-codepen"></i>
                    </a>

                    <a href="https://www.facebook.com/gabriel.numax" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook-square"></i>
                    </a>

                    <a href="https://www.instagram.com/gabriel.numax" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="https://twitter.com/gabrielnumax" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>

        );//end return
    }//end render
}//end class

export default Form;