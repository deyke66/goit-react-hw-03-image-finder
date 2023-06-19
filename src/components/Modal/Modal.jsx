import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }
  handleModalClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleModalEvent = e => {
    const { nodeName: currentElement } = e.target;
    if (currentElement !== 'IMG') {
      this.props.onClose();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }
  render() {
    return (
      <div className={style.Overlay} onClick={this.handleModalEvent}>
        <div className={style.Modal}>
          <img src={this.props.originalImg} alt="" />
        </div>
      </div>
    );
  }
}
