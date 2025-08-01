import React from 'react';
import styles from './TrailerModal.module.css';

function TrailerModal({ trailerId, onClose }) {
  if (!trailerId) return null;

  const youtubeUrl = `https://www.youtube.com/embed/${trailerId}?autoplay=1&rel=0`;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <iframe
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
        ></iframe>
      </div>
    </div>
  );
}

export default TrailerModal;