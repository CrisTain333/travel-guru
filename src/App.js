import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import UserContext from "./Contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContext>
        <RouterProvider router={router}>
        </RouterProvider>
      </UserContext>
    </div>
  );
}

export default App;
