import React, {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { news: [] }
    }

    componentDidMount() {
        this.apiGetNews(1, 10)
    }

    apiGetNews = (pageNumber, pageSize) => {
        console.log('---', 'get news')
        this.setState({loading: true, page: pageNumber})
        fetch(`https://content.guardianapis.com/search?order-by=newest&page=${pageNumber}&page-size=${pageSize}&api-key=9f756fb3-eb7e-4c78-b09e-fe352ae2620d`)
            .then(res => res.json())
            .then(data => this.setState({news: data.response.results, loading: false, totalPages: data.response.pages}))
            .catch(e => this.setState({loading: 'ERROR'}))
    }

    render() {

        return (
            <div>
                {<h1>The Guardians News</h1>}
                <button onClick={this.refresh}>Refresh</button>
                <ul>
                    {this.state.news.length >= 1 && this.state.news.map(function(name, index) {
                        return <li key = {index}>{name.webTitle}</li>
                    })}
                </ul>
                <div>
                    <button onClick={this.prevPage}>Prev</button>
                        <span>{this.state.page} of {this.state.totalPages}</span>
                    <button onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }

    refresh = () => {
        this.apiGetNews(1, 10)
        console.log('---', 'refresh')
    }

    prevPage = () => {
        let a = this.state.page - 1; // тут надо как то сделать проверку на то если a == 1 то не посылать запрос
        this.setState({page: a});
        this.apiGetNews(a, 10);
        console.log('---', 'Prev Page')
    }

    nextPage = () => {
        let a = this.state.page + 1;
        this.setState({page: a});
        this.apiGetNews(a, 10);
        console.log('---', 'Next Page')
    }

}

export default App