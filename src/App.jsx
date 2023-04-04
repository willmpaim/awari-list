import List from "./components/List";

const usersList = [
  {
      id: 1,
      name: 'William',
      adress: "Rua 10",
  },
  {
      id: 2,
      name: 'João',
      adress: "Rua 05",
  },
  {
      id: 3,
      name: 'Maria',
      adress: 'Rua 15',
  },
  {
      id: 4,
      name: 'Juliana',
      adress: 'Rua 20',
  },
]

function App() {
  return (
    <div className="App">
        <h1>Lista de Usuários</h1>
        <List usersList={usersList}/>
    </div>
  );
}

export default App;
