import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.min.css';

class Content extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <span className="main-title programmer-icon">👨‍💻</span>
        <h1 className="main-title">Burak Alp</h1>
        <h2 className="subtitle">Frontend and UI Developer from Turkey</h2>
        <p className="description">I am the Front-End Developer for <b><a href="http://www.klonbits.com" target="_blank">Klonbits</a></b> in Antalya, TURKEY. I always use minimalism at own projects.</p>
        <ul className="flex-list">
          <li className="list-item google-yellow">
            <a href="mailto:burakalp17@gmail.com">Mail-Me</a>
          </li>
          <li className="list-item linkedin-blue">
            <a href="https://www.linkedin.com/in/imburakalp" target="_blank">LinkedIn</a>
          </li>
          <li className="list-item google-green">
            <a href="#resumeSection" target="_blank" title="Resume for other Countries">Resume</a>
          </li>
          <li className="list-item google-red">
            <a href="#cvSection" target="_blank" title="CV for Turkey">CV</a>
          </li>
          <li className="list-item github-gray">
            <a href="https://github.com/gitburakalp" target="_blank">GitHub</a>
          </li>
          <li className="list-item">
            <span className="programmer-icon">💻</span>
          </li>
        </ul>
      </section>
    );
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('root')
);
