import { ModalFrame } from 'components/ModalFrame/ModalFrame';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const { webformatURL, largeImageURL, tags } = item;

  // const sendImage = () => {
  //   onClickImage(largeImageURL, tags);
  // };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <ModalFrame img={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </>
  );
};

export { ImageGalleryItem };
