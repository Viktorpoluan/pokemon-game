import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import pokemon1 from './components/images/pokemon1.jpg'
import PokemonCard from "./components/PokemonCard"
import c from './App.module.css'

const App = (props) => {
    let someData = props.state.map((d, id) => <PokemonCard key={id}
                                                           type={d.type}
                                                           values={d.values}
                                                           img={d.img}
                                                           name={d.name}
                                                           id={d.id}

    />)
    return (
        <div>
            <Header title='Adorable  pokemon!' desc='This is card game'/>
            <Layout id={1}
                    title='Rules of the game'
                    urlBg={pokemon1}>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them
                    into the player's own color of red or blue.
                </p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>

            <Layout id={2}
                    title='Game cards'
                    colorBg='skyblue'>
                <div className={c.flex}>
                    {someData}
                </div>
            </Layout>

            <Layout id={3}
                    title='title 3'
                    urlBg={pokemon1}>
            </Layout>

            <Footer/>
        </div>
    )
}

export default App
