import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import pokemon1 from './components/images/pokemon1.jpg'

const App = () => {
    return (
        <div>
            <Header title='Pokemon amazing!' desc='This is card game'/>
            <Layout id={1} title='title 1' desc='description 1' urlBg={pokemon1}/>
            <Layout id={2} title='title 2' desc='description 2' colorBg='skyblue'/>
            <Layout id={3} title='title 3' desc='description 3' urlBg={pokemon1}/>
            <Footer/>
        </div>
    )
}

export default App
