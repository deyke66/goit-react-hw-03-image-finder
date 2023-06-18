import style from './Modal.module.css'


export const Modal = ({largeImageURL}) =>{


        return (
        <div className={style.Overlay}>
          <div className={style.Modal}>
            <img src={largeImageURL} alt="" />
          </div>
        </div>
      );  
};
