import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from './components/images/bg1.jpg'


const App = () => {
    return (
        <div>
            <Header title={'This is title'} desc={'This is Description!'}/>
            <Layout id={1} title={'title 1'} desc={'description 1'} urlBg={bg1}/>
            <Layout id={2} title={'title 2'} desc={'description 2'} colorBg={'skyblue'}/>
            <Layout id={3} title={'title 3'} desc={'description 3'} urlBg={bg1}/>
            <Footer/>
        </div>
    )
}

export default App
