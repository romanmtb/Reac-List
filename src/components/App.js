import React, {Component} from 'react'
import api from '../utils'
import ListComponent from "./ListComponent";
import GuardianHeader from './HeaderComponent'
import NavigationComponent from "./NavigationComponent";
import HeaderMenuComponent from "./HeaderMenuComponent";
import PropTypes from 'prop-types'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {news: []}
    }

    static defaultProps = {
        loading: false,
        page: 0,
        totalPages: 0,
        news: [],
    }

    componentDidMount() {
        this.apiGetNews()
    }

    apiGetNews = (pageNumber = 1, pageSize = 10) => {
        this.setState({loading: true, page: pageNumber})
        api(pageNumber, pageSize)
            .then(res => {
                let data = res.response;
                this.setState({news: data.results, loading: false, totalPages: data.pages})
            })
            .catch(e => this.setState({loading: 'ERROR'}))
    }

    refreshNews = () => this.apiGetNews(1, 10)


    prevPage = () => {
        let page = this.state.page;
        page--;
        this.setState({page: page});
        this.apiGetNews(page);
    }

    nextPage = () => {
        let page = this.state.page;
        page++;
        this.setState({page: page});
        this.apiGetNews(page);
    }

    render() {
        if (this.state.loading === 'ERROR') return (
            <div>
                <GuardianHeader/>
                <p>Sorry we couldn't find news for you. Please try again later</p>
            </div>
        );

        return (
            <div>
                <GuardianHeader/>

                <HeaderMenuComponent refreshNews={this.refreshNews} />

                <ListComponent data={this.state.news}/>

                <NavigationComponent
                    currentPage={this.state.page}
                    totalPage={this.state.totalPages}
                    goForward={this.nextPage}
                    goBack={this.prevPage}
                />
            </div>
        )
    }

}

App.propTypes = {
    loading: PropTypes.any,
    page: PropTypes.number,
    totalPages: PropTypes.number,
    news: PropTypes.array,

}

export default App

