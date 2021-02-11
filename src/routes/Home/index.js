import Header from "../../components/Header"

const HomePage = (props) => {
    const handleClick = (page) => {
        props.onChangePage(page)
    }
    return (
        <div>

            <Header title='Adorable  pokemon!'
                    desc='This is card game'
                    onClickButton={handleClick}
            />

        </div>
    )
}

export default HomePage