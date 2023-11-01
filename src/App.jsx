import { useState } from "react";
import { getData } from "./data";
import "./App.css";

function App() {
  const animals = getData();
  const [filterProperty, setFilterProperty] = useState("");
  const uniqueSpecies = [...new Set(animals.map((animal) => animal.species))];
  let filtered = animals;
  if (filterProperty) {
    filtered = animals.filter((animal) => animal.species === filterProperty);
  }
  const [sortBy, setSortBy] = useState("name");
  function sortAnimals(a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    } else {
      return -1;
    }
  }

  filtered.sort(sortAnimals);

  const [sortDirection, setSortDirection] = useState("asc");
  if (sortDirection === "desc") {
    filtered.reverse();
  }

  const animalCategories = Object.keys(animals[0]);

  return (
    <div>
      <div className="species-buttons">
        <button onClick={() => setFilterProperty("")}>All</button>
        {uniqueSpecies.map((species) => (
          <button onClick={() => setFilterProperty(species)}>{species}</button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            {animalCategories.map((category) => (
              <th>
                <button className="capitalize" onClick={() => setSortBy(category)}>
                  {category}
                </button>
              </th>
            ))}
            <th>
              <button className="sort-direction" onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}>
                {sortDirection}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((animal) => (
            <tr>
              {animalCategories.map((category) => (
                <td>{animal[category]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
