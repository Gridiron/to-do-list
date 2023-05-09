import MainPage from './components/pages/mainPage/mainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </header>
      <MainPage />
    </div>
  );
}

export default App;
