import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="card-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  );
}
