import { Modal } from 'components/Modal/Modal';
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webUrl,
  largeImageURL,
  onClick,
  showModal,
}) => {
  return (
    <li className={style.ImageGalleryItem} onClick={onClick}>
      {showModal ? (
        <Modal largeImageURL={largeImageURL} />
      ) : (
        <img className={style.ImageGalleryItem_image} src={webUrl} alt="some" />
      )}
    </li>
  );
};
