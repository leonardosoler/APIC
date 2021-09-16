import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            news:[],

        };
    }

    componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-08-16&sortBy=publishedAt&apiKey=cbd780b541ee4af483869fe657ac0b7c"
        
        fetch(url)
        .then((response)=> {
            return response.json();
        })
        .then((data)=> {
            this.setState({
                news: data.articles,
            })
        })
        .catch((error) => console.log(error));
    }

    renderItems() {
    return this.state.news.map((item)=> (
        <NewSingle key={item.id} item={item} />
    ));
    }

render() {
    return (
            <ul>
                {this.renderItems()}
            </ul>
    )
}
}

export default News;