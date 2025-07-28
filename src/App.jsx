import About from "./components/About";
import Header from "./components/Header";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <>
      <Header />
      <main className="grid lg:grid-rows-[65vh_35vh]">
        <ShowCase />
        <About />
      </main>
    </>
  );
}

export default App;
