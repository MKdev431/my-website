import "./components/styles/App.css";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="page">
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
