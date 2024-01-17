import { Provider } from "react-redux";
import Header from "./component/Header";
import MainSection from "./pages/MainSection";
import PizzaStageSection from "./pages/PizzaStageSection";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <PizzaStageSection />
      <MainSection />
    </Provider>
  );
}

export default App;
