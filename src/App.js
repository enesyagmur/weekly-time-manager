import "./App.scss";
import CurrentStudy from "./components/CurrentStudy";
import DayList from "./components/DayList";
import TargetStudy from "./components/TargetStudy";
import { IoReload } from "react-icons/io5";
function App() {
  const localStorageReload = () => {
    localStorage.setItem("currentStudy", 0);
    localStorage.setItem("targetStudy", 0);
    localStorage.setItem("targetSelectedValue", 0);
    localStorage.setItem("Pazartesi", -1);
    localStorage.setItem("Salı", -1);
    localStorage.setItem("Çarşamba", -1);
    localStorage.setItem("Perşembe", -1);
    localStorage.setItem("Cuma", -1);
    localStorage.setItem("Cumartesi", -1);
    localStorage.setItem("Pazar", -1);
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
