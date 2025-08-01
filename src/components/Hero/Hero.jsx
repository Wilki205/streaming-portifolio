import React from 'react';
import styles from './Hero.module.css';

// 1. Receba a nova função 'onPlayClick' aqui
function Hero({ movie, onPlayClick }) {
  const heroStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 40%, transparent), url('${movie.backgroundImageUrl}')`
  };

  return (
    <main className={styles.heroContainer} style={heroStyle}>
      <div className={styles.infoWrapper}>
        <p className={styles.seriesLabel}>{movie.seriesLabel}</p>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.metadata}>
          <span>{movie.year}</span>
          <span className={styles.pill}>{movie.ageRating}</span>
          <span>{movie.duration}</span>
          <span>{movie.genre}</span>
        </div>
        <p className={styles.description}>
          {movie.description}
        </p>
        <div className={styles.buttons}>
          {/* 2. Adicione o evento onClick aqui */}
          <button className={styles.playButton} onClick={() => onPlayClick(movie)}>
            ▶ PLAY
          </button>
          <button className={styles.trailerButton}>WATCH TRAILER</button>
        </div>
      </div>
    </main>
  );
}

export default Hero;