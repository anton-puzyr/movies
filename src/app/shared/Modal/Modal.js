import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';

import Button from '../Button';
import './Modal.scss';

const { bool, object, func } = PropTypes;

class Modal extends Component {
  componentDidMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    const { isModalOpen, children, hide, action } = this.props;

    return isModalOpen
      ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal">
                <div className="modal__content">{children}</div>
                <div className="modal__button-group">
                  <div className="modal__button-group__confirm">
                    <Button text="Yes" onClick={action} />
                  </div>
                  <Button text="No" onClick={hide} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        this.root,
      )
      : null;
  }
}

Modal.propTypes = {
  isModalOpen: bool,
  children: object,
  hide: func,
  action: func,
};

export default Modal;
