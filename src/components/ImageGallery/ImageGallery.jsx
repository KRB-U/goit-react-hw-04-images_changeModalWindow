import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// STYLED
import { ImageGalleryItemLi, ImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryUl>
      {items &&
        items.map(item => {
          return (
            <ImageGalleryItemLi key={item.id}>
              <ImageGalleryItem item={item} />
            </ImageGalleryItemLi>
          );
        })}
    </ImageGalleryUl>
  );
};

export { ImageGallery };
