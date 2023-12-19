import "./App.scss";
import CurrentStudy from "./components/CurrentStudy";
import DayList from "./components/DayList";
import TargetStudy from "./components/TargetStudy";
import { IoReload } from "react-icons/io5";
function App() {
  const localStorageReload = () => {
    localStorage.setItem("currentStudy", 0);
    localStorage.setItem("targetStudy", 0);
    localStorage.setItem("pazartesi", -1);
    localStorage.setItem("sali", -1);
    localStorage.setItem("carsamba", -1);
    localStorage.setItem("persembe", -1);
    localStorage.setItem("cuma", -1);
    localStorage.setItem("cumartesi", -1);
    localStorage.setItem("pazar", -1);
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="contain">
        <TargetStudy />
        <DayList />
        <CurrentStudy />
        <IoReload className="reload-icon" onClick={localStorageReload} />
      </div>
    </div>
  );
}

export default App;

//sadece 1 komponent üzerinden tüm günleri yapma
