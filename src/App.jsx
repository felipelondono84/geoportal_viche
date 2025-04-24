
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Home */}
      <Home/>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
