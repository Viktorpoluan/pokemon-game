import cl from 'classnames'
import c from './App.module.css'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import PageAbout from "./routes/PageAbout";
import ContactPage from "./routes/ContactPage";


const App = (props) => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route>
                <>
                    <MenuHeader isPageActive={!match.isExact}/>
                    <div className={cl(c.wrap,{
                        [c.isHomePage]:match.isExact})}>
                        <Switch>
                            <Route  path='/home' render={() => <HomePage />}/>
                            <Route  path='/game' render={() => <GamePage state={props.state}/>}/>
                            <Route  path='/about' render={() => <PageAbout/>}/>
                            <Route  path='/contact' render={() => <ContactPage/>}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
}
export default App
