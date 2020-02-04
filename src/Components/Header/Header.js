import React, {Component} from 'react';

import css from './Header.module.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { addClass: false };
    }

    toogleHeader() {

        this.setState({addClass: !this.state.addClass});

    }

    render(){

        let cssClass = [css.Header];

        if(this.state.addClass){

            cssClass.push(css.HeaderActive);
        }

        return(
            <div className={cssClass.join(' ')} onClick={this.toogleHeader.bind(this)}>
                <i class="fas fa-bars"></i>
            </div>
            
        );

    }
}

export default Header;