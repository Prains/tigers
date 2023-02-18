import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Title from "./components/Title/TItle";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Title children={"Топ предложения"} />
      <Catalog />
      <Contacts />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
