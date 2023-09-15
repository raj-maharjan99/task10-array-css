import "./home.css";

function Home() {
  const name = ["Samragi", "Soma", "Raj", "Chhori", "Maharjan"];

  function numbersMap(name) {
    return <div>{name}</div>;
  }
  return <div className="container">{name.map(numbersMap)}</div>;
}
export default Home;
