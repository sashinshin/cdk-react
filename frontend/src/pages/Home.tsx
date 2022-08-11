import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => (
  <>
    <Navbar />
    <div className="App">
      <main className="main-content">
        <header className="section">
          <h1>Sasha Luhr</h1>
          <p>Fullstack developer</p>
        </header>

        <div className="spacer layer1" />

        <article className="section light">
          <h2> Who am I?</h2>

          <p>
            My name is Sasha Luhr. I'm a driven and creative developer with a passion for arts and design as well as technology and maths.
            I'm outgoing and social, and always looking for new challenges!
          </p>

        </article>


      </main>
    </div>
  </>
);


export default Home;
