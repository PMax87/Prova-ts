import { Loading, Tours } from "./components";
import { useTours } from "./context";

function App() {
  const { isLoading, tours, reloadAllTours } = useTours();

  if (isLoading) {
    return (
      <main>
        <section>
          <Loading />;
        </section>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            className="btn"
            type="button"
            style={{ marginTop: "2rem" }}
            onClick={reloadAllTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our tours</h2>
          <div className="title-underline"></div>
        </div>
        <Tours />
      </section>
    </main>
  );
}

export default App;
