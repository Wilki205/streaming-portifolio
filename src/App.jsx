import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ContentCarousel from './components/ContentCarousel/ContentCarousel'
import TrailerModal from './components/TrailerModal/TrailerModal';

import conjuring1Poster from './assets/posters/invocacao-do-mal-1.jpeg';
import annabellePoster from './assets/posters/annabelle.jpeg';
import conjuring2Poster from './assets/posters/invocacao-do-mal-2.jpeg';
import theNunPoster from './assets/posters/a-freira.jpeg';
import conjuring3Poster from './assets/posters/invocacao-do-mal-3.jpeg';

const allMovies = [
  {
    id: 1,
    title: 'Invocação do Mal',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2013', ageRating: '16+', duration: '1h 52min', genre: 'Supernatural Horror',
    description: 'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar uma família aterrorizada por uma presença sombria em sua fazenda.',
    backgroundImageUrl: conjuring1Poster,
    thumbnailUrl: conjuring1Poster,
    trailerId: 'k10ETZ41q5o'
  },
  {
    id: 2,
    title: 'Annabelle',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2014', ageRating: '16+', duration: '1h 39min', genre: 'Supernatural Horror',
    description: 'Um casal começa a viver experiências sobrenaturais aterrorizantes envolvendo uma boneca vintage logo após sua casa ser invadida por satanistas.',
    backgroundImageUrl: annabellePoster,
    thumbnailUrl: annabellePoster,
    trailerId: 'pa_H9A_ofV4'
  },
  {
    id: 3,
    title: 'Invocação do Mal 2',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2016', ageRating: '16+', duration: '2h 14min', genre: 'Supernatural Horror',
    description: 'Ed e Lorraine Warren viajam para Londres para ajudar uma mãe solteira e seus quatro filhos que são assombrados por uma entidade maligna.',
    backgroundImageUrl: conjuring2Poster,
    thumbnailUrl: conjuring2Poster,
    trailerId: 'VFsmuRPClr4'
  },
  {
    id: 4,
    title: 'Annabelle 2: A Criação do Mal',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2017', ageRating: '16+', duration: '1h 50min', genre: 'Supernatural Horror',
    description: 'Um fabricante de bonecas e sua esposa acolhem uma freira e várias meninas de um orfanato, que se tornam o alvo da criação possuída do casal.',
    backgroundImageUrl: annabellePoster, 
    thumbnailUrl: annabellePoster,
    trailerId: 'E-ePso1kY3w'
  },
  {
    id: 5,
    title: 'A Freira',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2018', ageRating: '16+', duration: '1h 36min', genre: 'Gothic Horror',
    description: 'O Vaticano envia um padre e uma noviça para investigar o suicídio de uma jovem freira na Romênia, onde descobrem um segredo profano.',
    backgroundImageUrl: theNunPoster,
    thumbnailUrl: theNunPoster,
    trailerId: 'z_n_b-0Hj-M'
  },
  {
    id: 6,
    title: 'A Maldição da Chorona',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2019', ageRating: '16+', duration: '1h 33min', genre: 'Supernatural Horror',
    description: 'Ignorando um aviso sinistro, uma assistente social e seus filhos se veem atraídos para um aterrorizante reino sobrenatural.',
    backgroundImageUrl: conjuring1Poster, 
    thumbnailUrl: conjuring1Poster,
    trailerId: 'uOV-xMYQ61A'
  },
  {
    id: 7,
    title: 'Annabelle 3: De Volta Para Casa',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2019', ageRating: '16+', duration: '1h 46min', genre: 'Supernatural Horror',
    description: 'Enquanto cuidam da filha dos Warren, a babá e sua amiga despertam inadvertidamente um espírito maligno aprisionado na infame boneca.',
    backgroundImageUrl: annabellePoster, 
    thumbnailUrl: annabellePoster,
    trailerId: 'bCxm7c-bE-w'
  },
  {
    id: 8,
    title: 'Invocação do Mal 3: A Ordem do Demônio',
    seriesLabel: 'THE CONJURING UNIVERSE',
    year: '2021', ageRating: '16+', duration: '1h 52min', genre: 'Supernatural Horror',
    description: 'Os investigadores paranormais Ed e Lorraine Warren arriscam suas vidas para provar a inocência de um homem acusado de assassinato.',
    backgroundImageUrl: conjuring3Poster,
    thumbnailUrl: conjuring3Poster,
    trailerId: 'sN9g9s4O2oQ'
  }
];

function App() {
  const [featuredMovie, setFeaturedMovie] = useState(allMovies[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrailerId, setSelectedTrailerId] = useState('');

  const handleMovieSelect = (movie) => {
    setFeaturedMovie(movie);
  };

  const handlePlayClick = (movie) => {
    setSelectedTrailerId(movie.trailerId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrailerId('');
  };

  return (
    <div className="App">
      <Header />
      <Hero movie={featuredMovie} onPlayClick={handlePlayClick} />
      <ContentCarousel movies={allMovies} onMovieSelect={handleMovieSelect} />
      {isModalOpen && <TrailerModal trailerId={selectedTrailerId} onClose={closeModal} />}
    </div>
  );
}

export default App;