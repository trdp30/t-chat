import "./App.less";
import Navigation from "./navigation";
import { toast } from "react-toastify";

toast.configure({
  position: "top-right"
});

function App() {
  return <Navigation />;
}

export default App;
