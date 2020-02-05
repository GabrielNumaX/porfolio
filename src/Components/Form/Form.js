import React, {Component}from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare, faCodepen, faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import Popup from './Popup';

import css from './Form.module.css';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            feedback: '', 
            name: '', 
            email: '' ,
            showPopup: false
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

       

    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
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

        if(textarea.value === ''){

            this.togglePopup();

            // console.log('no mail')
        }
        else {

            this.sendFeedback(templateId, 
                {
                    message_html: this.state.feedback, 
                    from_name: this.state.name, 
                    reply_to: this.state.email
                });

                nameInput.value = '';
                emailInput.value = '';
                emailInput.required = false;
                textarea.value = '';

            // console.log('mail sent')
                
        }

        
        
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
            {/* <div className={css.FormDiv} ref={this.props.formRef}> */}
            {/* <div className={css.FormDiv} ref={(input) => { this.formRef = input; }}> */}

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

                    {this.state.showPopup ? 
                        <Popup
                            text='Please enter a message.'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </form>
                
                <h3>Social Media</h3>

                <div className={css.SocialMedia}>
                        
                    <a href="https://www.linkedin.com/in/numax" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>

                    <a href="https://github.com/GabrielNumaX" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </a>

                    <a href="https://codepen.io/NumaX" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
                    </a>

                    <a href="https://www.facebook.com/gabriel.numax" target="_blank" rel="noopener noreferrer">

                        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                    </a>

                    <a href="https://www.instagram.com/gabriel.numax" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>

                    <a href="https://twitter.com/gabrielnumax" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                    </a>

                </div>
            </div>

        );//end return
    }//end render
}//end class

// export default React.forwardRef((props, ref) => <Form 
// formRef={ref} {...props}
// />);

export default Form;