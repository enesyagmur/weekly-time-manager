import "./App.scss";
import CurrentStudy from "./components/CurrentStudy";
import DayList from "./components/DayList";
import TargetStudy from "./components/TargetStudy";
import { IoReload } from "react-icons/io5";
import { updateTargetStudyCount } from "./redux/targetSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const [suAnkiTarih, setSuAnkiTarih] = useState(new Date());

  useEffect(() => {
    setSuAnkiTarih(new Date());
  }, []);

  const dispatch = useDispatch();
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

    dispatch(updateTargetStudyCount());
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
