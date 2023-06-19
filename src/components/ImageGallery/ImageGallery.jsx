import style from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ articles, onClick }) => {
  return (
    <ul className={style.ImageGallery}>
      {articles.map(i => (
        <ImageGalleryItem
          key={i.id}
          webUrl={i.webformatURL}
          onClick={onClick}
          largeImageURL={i.largeImageURL}
        />
      ))}
    </ul>
  );
};
