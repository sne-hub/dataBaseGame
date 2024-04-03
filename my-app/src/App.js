import { useSelector } from "react-redux";
import "./App.css";
import Game from "./Components/Game";
import LoginDetails from "./Components/LoginDetails";
import DataTable from "./Components/DataTable";

function App() {
  const isFormOpen = useSelector((state) => state.isFormOpen);

  return (
    <div className="App">
      <header className="App-header">
        <p>Memory Game</p>
      </header>
      {isFormOpen && <LoginDetails />}

      <Game />
      {!isFormOpen && <DataTable />}
    </div>
  );
}

export default App;
