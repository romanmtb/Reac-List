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
        fetch('https://content.guardianapis.com/search?order-by=newest&page=1&page-size=10&api-key=9f756fb3-eb7e-4c78-b09e-fe352ae2620d')
            .then(res => res.json())
            .then(data => console.log(data.response.results))
    }


    render() {

        return (
            this.state.news.map(item => {
                return (
                    <div>hello</div>
                )
            })
        )
    }

}

export default App