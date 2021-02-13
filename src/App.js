import cl from 'classnames'
import c from './App.module.css'
import {Route, Switch, useLocation} from 'react-router-dom'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import PageAbout from "./routes/PageAbout";
import ContactPage from "./routes/ContactPage";

const App = () => {
   const location = useLocation()
    const isPadding= location.pathname === '/' || location.pathname === '/game/board'
    return (

            <Switch>
                <Route path='/404' render={() => (
                    <h1>404 NOT FOUND</h1>
                )}/>
                <Route>
                    <>
                        <MenuHeader isPageActive={!isPadding}/>
                        <div className={cl(c.wrap, {
                            [c.isHomePage]:isPadding
                        })}>
                            <Switch>
                                <Route path='/home' component={HomePage}
                                />
                                <Route path='/game' render={() => (

                                    <GamePage /*state={props.state}*//>
                                )}/>
                                <Route path='/about' render={() => <PageAbout /*state={props.state}*//>}/>
                                <Route path='/contact' render={() => <ContactPage/>}/>
                                {/*<Route render={() => <Redirect to='/404'/>}/>*/}
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>

    )
}
export default App
