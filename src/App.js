import cl from 'classnames'
import c from './App.module.css'
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import PageAbout from "./routes/PageAbout";
import ContactPage from "./routes/ContactPage";
import {FireBaseContexts} from "./components/context/firebaseContext";
import firebaseD from "./service/fireBase";


const App = () => {
    const match = useRouteMatch('/');
    return (

            <Switch>
               {/* <Route path='/404' render={() => (
                    <div>404 NOT FOUND</div>
                )}/>*/}
                <Route>
                    <>
                        <MenuHeader isPageActive={!match.isExact}/>
                        <div className={cl(c.wrap, {
                            [c.isHomePage]: match.isExact
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
