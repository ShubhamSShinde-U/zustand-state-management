import "./App.css";
import useStore from "./zustand/store";
function App() {
  
  const stateForReadOnly = useStore((state) => state);
  const listOfItems = useStore((state) => state.listOfItem);
  const removeFromList = useStore((state) => state.removeFromList);
  const addTask = useStore((store) => store.addNewTaskValue);
  const addToItemList = useStore((store) => store.addToList);

  return (
    <div className="wrapper">
      <div className="all-tasks">
        {" "}
        {listOfItems.map((item: string, index: number) => {
          return (
            <div className="list-item">
              <div>{item}</div>{" "}
              <span
                onClick={() => {
                  removeFromList(index);
                }}
              >
                Clear
              </span>
            </div>
          );
        })}
      </div>

      <input
        placeholder="Enter task"
        value={stateForReadOnly.newTaskValue}
        onChange={(e: any) => {
          addTask(e.target.value);
        }}
      />

      <button
        onClick={() => {
          addToItemList(stateForReadOnly.newTaskValue);
          addTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
