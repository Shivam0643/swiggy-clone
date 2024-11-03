import Category from "./Components/Category";
import Chains from "./Components/Chains";
import Dining from "./Components/Dining";
import Explore from "./Components/Explore";
import Header from "./Components/Header";
import More from "./Components/More";
import OnlineDelivery from "./Components/OnlineDelivery";
import Popular from "./Components/Popular";
import TopRest from "./Components/TopRest";
import Whats from "./Components/Whats";

function App() {
  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
      <Dining />
      <Explore />
      <Whats />
      <Chains />
      <Popular />
      <More />
    </>
  );
}

export default App;
