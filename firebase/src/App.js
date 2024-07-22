import "./App.css";
import SignUpPage from "./pages/SignUpPage";

// import { getDatabase, ref, set } from "firebase/database";

// import { app } from "./firebase";
// const db = getDatabase(app);

// const putData = () => {
//   set(ref(db, "users/ab"), {
//     id: 1,
//     name: "Preeti",
//     age: 25,
//   });
// };

function App() {
  return (
    <>
      {/* <button onClick={putData}> show Data</button> */}
      <SignUpPage />
    </>
  );
}

export default App;
