import React, {Component} from 'react';

import {Link, Route} from 'react-router-dom';

import Form from '../Form/Form';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes, faHome, faAddressCard, faTools, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import css from './Header.module.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            addClass: false,
            hover: false };
    }

    toogleHeader() {

        this.setState({addClass: !this.state.addClass});

    }

    iconHover() {

        this.setState({hover: !this.state.hover});
    }

    goToForm = () => {
        // this.props.formRefProp.current.focus();
        this.props.formRefProp.focus();

        console.log(this.props.formRefProp);      
      }

    render(){

        let cssClass = [css.Header];

        let headerIcons = [css.HeaderNoShow]; 
        
        let Hamburger = [css.HamburgerShow];

        if(this.state.addClass){

            cssClass.push(css.HeaderActive);

            headerIcons.push(css.HeaderShow);

            Hamburger.push(css.HamburgerNoShow);    
        }

        let HomeHover = [css.SpanNoShow];
        let AddressHover = [css.SpanNoShow];
        let ToolsHover = [css.SpanNoShow];
        let BriefcaseHover = [css.SpanNoShow];
        let EnvelopeHover = [css.SpanNoShow];

        if(this.state.hover){

            HomeHover.push(css.ShowHome);
            AddressHover.push(css.ShowAddress);
            ToolsHover.push(css.ShowTools);
            BriefcaseHover.push(css.ShowBriefcase);
            EnvelopeHover.push(css.ShowEnvelope);


        }

        console.log(this.props.formRefProp);

        return(
            <div className={cssClass.join(' ')}>

                <div className={Hamburger.join(' ')} onClick={this.toogleHeader.bind(this)}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                 

                 <div className={headerIcons.join(' ')}>
                     <FontAwesomeIcon icon={faTimes} 
                                    className={css.XIcon}
                                    onClick={this.toogleHeader.bind(this)}></FontAwesomeIcon>
                     
                     <FontAwesomeIcon icon={faHome}
                                    className={css.Icons}
                                    onMouseEnter={this.iconHover.bind(this)}
                                    onMouseLeave={this.iconHover.bind(this)}></FontAwesomeIcon>

                    <p className={HomeHover.join(' ')}>Home</p>

                     <FontAwesomeIcon icon={faAddressCard}
                                    className={css.Icons}
                                    onMouseEnter={this.iconHover.bind(this)}
                                    onMouseLeave={this.iconHover.bind(this)}></FontAwesomeIcon>

                    <p className={AddressHover.join(' ')}>Intro</p>

                     <FontAwesomeIcon icon={faTools}
                                    className={css.Icons}
                                    onMouseEnter={this.iconHover.bind(this)}
                                    onMouseLeave={this.iconHover.bind(this)}></FontAwesomeIcon>

                    <p className={ToolsHover.join(' ')}>Skills &amp; Tools</p>

                     <FontAwesomeIcon icon={faBriefcase}
                                    className={css.Icons}
                                    onMouseEnter={this.iconHover.bind(this)}
                                    onMouseLeave={this.iconHover.bind(this)}></FontAwesomeIcon>

                    <p className={BriefcaseHover.join(' ')}>Portfolio</p>
                    
                    
                    <FontAwesomeIcon icon={faEnvelope}
                                    className={css.Icons}
                                    onMouseEnter={this.iconHover.bind(this)}
                                    onMouseLeave={this.iconHover.bind(this)}
                                    onClick={this.goToForm}></FontAwesomeIcon>

                    <p className={EnvelopeHover.join(' ')}>Contact</p>
                    

                 </div>
            </div>
            
        );

    }
}

export default Header;