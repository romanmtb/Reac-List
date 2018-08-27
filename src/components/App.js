import React, {Component} from 'react'
import ArticleList from './NewsList'
import articles from '../data'


class App extends  Component {

    render() {
        return (
            <div>
                <div>
                    <h1>
                        App name
                    </h1>
                </div>
                <ArticleList articles = {articles}/>
            </div>
        )
    }

}

export default App