import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentDidMount() {
        console.log( '---' )
    }

    render() {
        const {article} = this.props
        const body = <section>{article.description}</section>
        return (
            <div>
                <div>
                    <h2>
                        {article.title}
                    </h2>
                </div>
                <div>
                    {body}
                </div>
            </div>
        )
    }

}

export default Article