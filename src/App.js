import Footer from "./components/Footer";
import Form from "./components/Form";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      {/* <ParticleBg /> */}
      <div className="container mx-auto max-w-xl relative z-10">
        <div className="mt-5">
          <Logo />
        </div>
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
