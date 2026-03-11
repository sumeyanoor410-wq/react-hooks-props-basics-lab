import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // or the correct path in your project

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;