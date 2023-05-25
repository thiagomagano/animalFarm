import { useState, useEffect } from "react";

function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);

  const search = async (q) => {
    const response = await fetch(
      "http://localhost:8080?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);

    localStorage.setItem("lastQuery", q);
  };
  return { search, animals };
}

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

        {animals.length === 0 && "No Animals Found"}
      </ul>
    </main>
  );
}

function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{type}</strong> {name} ({age} anos de idade)
    </li>
  );
}
export default App;
