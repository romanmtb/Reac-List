import React, {Component} from 'react'
import api from '../utils'
import ListComponent from "./ListComponent";
import GuardianHeader from './HeaderComponent'
import NavigationComponent from "./NavigationComponent";
import HeaderMenuComponent from "./HeaderMenuComponent";
import PropTypes from 'prop-types'
import LoadingComponent from "./LoadingComponent";


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

    refreshNews = () => this.apiGetNews(this.state.page);


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
        //в этом методе надо добавить запрос на загрузку новости и этот текст нужно засунуть в объект новости
        current[idx].opened = !current[idx].opened;
        this.setState(current);
    }

    render() {

        return (
            <React.Fragment>
                <GuardianHeader/>

                <HeaderMenuComponent refreshNews={this.refreshNews}/>

                <ListComponent data={this.state.news} openHandler={this.changeState}/>
                {!this.state.loading ? <NavigationComponent
                    currentPage={this.state.page}
                    totalPage={this.state.totalPages}
                    goForward={this.nextPage}
                    goBack={this.prevPage}
                /> : <LoadingComponent/>
                }
            </React.Fragment>
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