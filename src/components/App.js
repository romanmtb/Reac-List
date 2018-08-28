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
        this.setState({loading: true})
        fetch('https://content.guardianapis.com/search?order-by=newest&page=1&page-size=10&api-key=9f756fb3-eb7e-4c78-b09e-fe352ae2620d')
            .then(res => res.json())
            .then(data => this.setState({news: data.response.results, loading: false}))
            .catch(e => this.setState({loading: 'ERROR'}))
    }


    render() {

        return (
            <ul>
                {this.state.news.length >= 1 && this.state.news.map(function(name, index) {
                    return <li key = {index}>{name.webTitle}</li>
                })}
            </ul>
        )
    }

}

export default App