import { useEffect } from 'react';
import { Overlay, ImageContainer } from './Modal.styled';

const ModalFrame = ({ img, tags, onClose }) => {
  const handleOverlayClick = evt => {
    console.dir(evt.currentTarget);
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <ImageContainer>
          <img src={img} alt={tags} />
        </ImageContainer>
      </Overlay>
    </>
  );
};

export { ModalFrame };
