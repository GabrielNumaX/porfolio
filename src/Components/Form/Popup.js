import React, {Component} from 'react';

import css from './Popup.module.css';

class Popup extends React.Component {
    render() {
      return (
        <div className={css.popup}>
          <div className={css.popup_inner}>
              
            <h3 className={css.H3}>{this.props.text}</h3>

            <button className={css.Button}
                    onClick={this.props.closePopup}>Ok</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;