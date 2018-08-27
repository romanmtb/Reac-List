import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { news: [] }
    }

    componentDidMount() {
        this.apiGetNews()
    }

    apiGetNews = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(data => this.setState({news: data }))
    }


    render() {

        return (
            this.state.news.map(item => {
                return (
                    <div key = {item.id} className="artticle">
                        <div className="article__item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })
        )
    }

}

export default App