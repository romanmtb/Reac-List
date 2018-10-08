import React, { Component } from 'react';
import ListComponent from './ListComponent';
import GuardianHeader from './HeaderComponent';
import NavigationComponent from './NavigationComponent';
import HeaderMenuComponent from './HeaderMenuComponent';
import PropTypes from 'prop-types';
import LoadingComponent from './LoadingComponent';
import { apiGetNewsBody, getNews } from '../utils';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = { news: [] };
		this.changeState = this.changeState.bind(this);
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
		this.setPage = this.setPage.bind(this);
	}

	static defaultProps = {
		loading: false,
		page: 0,
		totalPages: 0,
		news: [],
	};

	componentDidMount() {
		this.apiGetNews();
		console.log('hello');

	}

	apiGetNews = (pageNumber = 1, pageSize = 10) => {
		this.setState({ loading: true, page: pageNumber });
		getNews(pageNumber, pageSize)
			.then(res => {
				let data = res.response;
				this.setState({
					news: data.results.map(i => {
						i.opened = false;
						return i;
					}),
					loading: false,
					totalPages: data.pages,
				});
			})
			.catch(e => this.setState({ loading: 'ERROR' }));
	};

	refreshNews = () => this.apiGetNews(1, 10);

	prevPage = () => {
		let page = this.state.page;
		page--;
		this.setPage(page);
	};

	nextPage = () => {
		let page = this.state.page;
		page++;
		this.setPage(page);
	};

	setPage = pageId => {
		this.setState({ page: pageId });
		this.apiGetNews(pageId);
	};

	changeState(e, idx) {
		let current = this.state.news;

		if (current[idx].body === undefined) {
			apiGetNewsBody(current[idx].id).then(i => {
				current[idx].body = i.body;
				current[idx].opened = !current[idx].opened;
				this.setState(current);
			});
		} else {
			current[idx].opened = !current[idx].opened;
			this.setState(current);
		}
	}

	inputChangeHandler(e) {
		let inp = e.target.value.replace(/\D/g, '');

		if (inp !== this.state.page) {
			if (inp > this.state.totalPages) {
				inp = this.state.totalPages;
			}

			this.setState({ page: inp });

			// setTimeout(() => this.setPage(inp), 1600);
			// this.setPage(inp)
		}
	}

	render() {
		if (this.state.loading === 'ERROR')
			return (
				<div className="container">
					<header className="jumbotron">
						<GuardianHeader />
						<HeaderMenuComponent refreshNews={this.refreshNews} />
					</header>
					<div className="alert-danger">
						<p>Sorry we couldnt find news for you. Please try again later</p>
					</div>
				</div>
			);

		return (
			<div className="container">
				<header className="jumbotron">
					<GuardianHeader />
					{!this.state.loading ? (
						<HeaderMenuComponent refreshNews={this.refreshNews} />
					) : (
						<div>
							<HeaderMenuComponent refreshNews={this.refreshNews} />{' '}
							<LoadingComponent />
						</div>
					)}
				</header>

				<div className="container" style={{ width: '90%' }}>
					<ListComponent
						data={this.state.news}
						openHandler={this.changeState}
					/>

					{
						<NavigationComponent
							currentPage={this.state.page}
							totalPage={this.state.totalPages}
							goForward={this.nextPage}
							goBack={this.prevPage}
							inputChangeHandler={this.inputChangeHandler}
							setPage={this.setPage}
						/>
					}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	loading: PropTypes.any,
	page: PropTypes.number,
	totalPages: PropTypes.number,
	news: PropTypes.array,
};

export default App;
