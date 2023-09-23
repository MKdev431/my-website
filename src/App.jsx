import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import "./components/styles/App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <section className="portfolio">
          <Portfolio />
        </section>
        <section className="skills">
          <Skills />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
