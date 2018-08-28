import React, {Component} from 'react'
import api from '../utils'
import ListComponent from "./ListComponent";
import GuardianHeader from './HeaderComponent'
import NavigationComponent from "./NavigationComponent";
import HeaderMenuComponent from "./HeaderMenuComponent";
import PropTypes from 'prop-types'
import LoadingComponent from "./LoadingComponent";
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {news: []};
        this.changeState = this.changeState.bind(this);
    }

    static defaultProps = {
        loading: false,
        page: 0,
        totalPages: 0,
        news: [],
    };

    componentDidMount() {
        this.apiGetNews()
    }

    apiGetNews = (pageNumber = 1, pageSize = 10) => {
        this.setState({loading: true, page: pageNumber})
        api(pageNumber, pageSize)
            .then(res => {
                let data = res.response;
                this.setState({news: data.results.map(i=>{i.opened=false; return i;}), loading: false, totalPages: data.pages})
            })
            .catch(e => this.setState({loading: 'ERROR'}))
    };

    refreshNews = () => this.apiGetNews(1, 10);


    prevPage = () => {
        let page = this.state.page;
        page--;
        this.setState({page: page});
        this.apiGetNews(page);
    };

    nextPage = () => {
        let page = this.state.page;
        page++;
        this.setState({page: page});
        this.apiGetNews(page);
    };

    changeState(e, idx) {
        let current = this.state.news;
        current[idx].opened = !current[idx].opened;
        this.setState(current);
    }

    render() {

        if (this.state.loading === 'ERROR') return (
            <div className="container">
                <header className="jumbotron">
                    <GuardianHeader/>
                    <HeaderMenuComponent refreshNews={this.refreshNews}/>
                </header>
                <div className="alert-danger"><p>Sorry we couldn't find news for you. Please try again later</p></div>
            </div>
        );

        return (
            <div className="container">
                <header className="jumbotron">
                    <GuardianHeader/>
                    <HeaderMenuComponent refreshNews={this.refreshNews}/>
                </header>

                <div className="container" style = {{ width: '90%'}}>
                    <ListComponent data={this.state.news} openHandler={this.changeState}/>

                    {!this.state.loading ? <NavigationComponent
                        currentPage={this.state.page}
                        totalPage={this.state.totalPages}
                        goForward={this.nextPage}
                        goBack={this.prevPage}
                    /> : <LoadingComponent/>
                    }
                </div>
            </div>
        )
    }

}

App.propTypes = {
    loading: PropTypes.any,
    page: PropTypes.number,
    totalPages: PropTypes.number,
    news: PropTypes.array,
};

export default App