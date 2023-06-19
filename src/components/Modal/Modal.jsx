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

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }
  render() {
    return (
      <div className={style.Overlay} onClick={this.props.onClick}>
        <div className={style.Modal}>
          <img src={this.props.originalImg} alt="" />
        </div>
      </div>
    );
  }
}
