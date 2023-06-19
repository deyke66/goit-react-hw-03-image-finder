import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webUrl,
  onClick,
  largeImageURL
}) => {
  return (
    <li className={style.ImageGalleryItem} onClick={onClick} data-source={largeImageURL}> 
        <img className={style.ImageGalleryItem_image} src={webUrl} alt="some" />
    </li>
  );
};
