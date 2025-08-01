import React from 'react';
import styles from './ContentCarousel.module.css';

// 1. A função agora recebe 'movies' e 'onMovieSelect' como props
function ContentCarousel({ movies, onMovieSelect }) {
  // 2. Apagamos o mockData daqui. Agora os dados vêm de fora!

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>WHAT'S NEXT?</h2>
      <div className={styles.movieList}>
        {/* 3. Usamos a lista de filmes que recebemos via props */}
        {movies.map((movie) => (
          // 4. Adicionamos o evento onClick. Ele chama a função que recebemos via props.
          <div 
            key={movie.id} 
            className={styles.movieCard} 
            onClick={() => onMovieSelect(movie)}
          >
            {/* Usamos a thumbnailUrl que definimos no App.jsx */}
            <img src={movie.thumbnailUrl} alt={movie.title} className={styles.movieImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentCarousel;