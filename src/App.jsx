import useAnimalSearch from "./hooks/useAnimalSearch";
import Animal from "./components/Animal";

function App() {
  const { search, animals } = useAnimalSearch();

  return (
    <main>
      <h1>Animal Farm</h1>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => search(e.target.value)}
      />

      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal}></Animal>
        ))}

        {animals.length === 0 && "Nenhum animal Encontrado"}
      </ul>
    </main>
  );
}

export default App;
