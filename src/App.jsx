/*import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // Estado para armazenar o arquivo de áudio selecionado
  const [audioFile, setAudioFile] = useState(null);

  // Referência para o elemento de áudio
  const audioRef = useRef(null);

  // Função para lidar com a seleção do arquivo
  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file)); // Cria um link temporário para o arquivo
    }
  };

  // Função para iniciar a reprodução
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Função para pausar a reprodução
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="App">
      <h1>Player de Música Local</h1>
      
      {//Input para selecionar o arquivo de áudio }
      <input 
        type="file" 
        accept="audio/*" 
        onChange={handleAudioChange} 
      />

      {// Elemento de áudio }
      {audioFile && (
        <div>
          <audio ref={audioRef} src={audioFile} controls />
        </div>
      )}

      <div>
        {// Botões para controlar a música }
        <button onClick={playAudio}>Tocar</button>
        <button onClick={pauseAudio}>Pausar</button>
      </div>
    </div>
  );
}

export default App;*/

/*import React, { useRef } from 'react';
import './App.css';

function App() {
  // Referência para o elemento de áudio
  const audioRef = useRef(null);

  // Caminho para o arquivo de áudio local
  const audioFile = '/Music/Canon in D - Pachelbel.mp3'; // Substitua pelo caminho do seu arquivo de áudio

  // Função para iniciar a reprodução
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Função para pausar a reprodução
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="App">
      <h1>Player de Música</h1>

      {// Elemento de áudio }
      <audio ref={audioRef} src={audioFile} />
      
      <div>
        {// Botões para controlar a música }
        <button onClick={playAudio}>Tocar</button>
        <button onClick={pauseAudio}>Pausar</button>
      </div>
    </div>
  );
}

export default App;*/

/*import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // Lista de músicas
  const songs = [
    { title: "Song 1", file: "/Music/Canon in D - Pachelbel.mp3" },
    { title: "Song 2", file: "/Music/ROSÉ - 3am (liveperformance).mp3" },
    { title: "Song 3", file: "/Music/That's So True.mp3" },
  ];

  // Estado para armazenar a música atual
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const audioRef = useRef(null);

  // Função para mudar a música
  const changeSong = (song) => {
    setCurrentSong(song);
  };

  // Função para tocar a música
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Função para pausar a música
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="App">
      <h1>Player de Música</h1>

      {/* Exibe o título da música atual/ }
      <h2>{currentSong.title}</h2>

      {/* Elemento de áudio /}
      <audio ref={audioRef} src={currentSong.file} />

      <div>
        {/* Botões para controlar a música / }
        <button onClick={playAudio}>Tocar</button>
        <button onClick={pauseAudio}>Pausar</button>
      </div>

      {/* Lista de músicas/ }
      <div>
        <h3>Escolha uma música:</h3>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <button onClick={() => changeSong(song)}>{song.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;*/
import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  // Lista de músicas
  const songs = [
    { title: "Song 1", file: "/Music/Canon in D - Pachelbel.mp3" },
    { title: "Song 2", file: "/Music/ROSÉ - 3am (live performance).mp3" },
    { title: "Song 3", file: "/Music/That's So True.mp3" },
  ];

  // Estado para armazenar a música atual
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const audioRef = useRef(null);

  // Função para mudar a música
  const changeSong = (song) => {
    // Pausa a música atual
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reinicia a música
    }
    setCurrentSong(song); // Atualiza a música atual
  };

  // Função para tocar a música
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Função para pausar a música
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Sempre que a música mudar, atualizamos o <audio>
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Força o reload do áudio
    }
  }, [currentSong]); // A dependência `currentSong` garante que o código será executado quando a música mudar

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Player de Música</h1>

        {/* Exibe o título da música atual */}
        <h2 className="text-2xl mb-6 text-center">{currentSong.title}</h2>

        {/* Elemento de áudio com chave para forçar recarregamento */}
        <audio
          ref={audioRef}
          src={currentSong.file}
          preload="auto"
        />

        <div className="flex space-x-4 justify-center mb-8">
          {/* Botões para controlar a música */}
          <button
            onClick={playAudio}
            className="bg-green-500 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600 transition"
          >
            Tocar
          </button>
          <button
            onClick={pauseAudio}
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg hover:bg-red-600 transition"
          >
            Pausar
          </button>
        </div>

        {/* Lista de músicas */}
        <div>
          <h3 className="text-xl mb-4 text-center">Escolha uma música:</h3>
          <ul className="space-y-2">
            {songs.map((song, index) => (
              <li key={index}>
                <button
                  onClick={() => changeSong(song)}
                  className="w-full text-left text-lg text-gray-200 hover:bg-indigo-500 py-2 px-4 rounded-md transition"
                >
                  {song.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

