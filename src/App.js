import "./App.scss";
import CurrentStudy from "./components/CurrentStudy";
import DayList from "./components/DayList";
import TargetStudy from "./components/TargetStudy";
import { IoReload } from "react-icons/io5";
import { updateTargetStudyCount } from "./redux/targetSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const localStorageReload = () => {
    localStorage.setItem("currentStudy", 0);
    localStorage.setItem("targetStudy", 0);
    dispatch(updateTargetStudyCount());
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
