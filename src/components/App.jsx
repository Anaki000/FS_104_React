import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Message from "./Message/Message";


const App = () => {
    return (
      <main>
        <Header />
        <Message author ="Petro"
        message ="Продам холодильник"/>
        <Message author ="Stepan"
        message ="Ищу работу"/>
        <Footer />
      </main>
    );
  };


  export default App;