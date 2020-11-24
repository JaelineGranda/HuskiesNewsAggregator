import React from 'react';
import './index.css';
import './App.css';
//Routing Links 
class ToggleRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChangeSaveValue = this.onInputChangeSaveValue.bind(this)
    }
    onInputChangeSaveValue(e){
        e.preventDefault();
        var inputValue = e.target.value
        this.props.displaySearchedNews(inputValue)
    }
    render(){
        return(<nav id="main-nav">
          <div class="container">
            <img src="img/logo.png" alt="NewsMedia" class="logo"/>
            <div class = 'social'>
              <a href="http://facebook.com.br" target = 'blank'>Login</a>
              <a href="http://twitter.com.br" target = 'blank'>Sign Up</a>
            </div>
            <ul>
              <li><a href="index.html" class="current">Top News</a></li>
              <li><a href="about.html" >Entertaiment</a></li>
              <li><a href="about.html" >Sports</a></li>
              <li><a href="about.html" >Business</a></li>
              <li><a href="about.html" >World</a></li>
            </ul>
          </div>
        </nav>
        
        )
    }
};

//placeholder with hard height needed for indenting fixed nav bar
function PlaceHolderForNavBar(){
    return(
        <div className="place-hold-nav"></div>
    )
}

//parent of all pages, the top navbar stays same and still on all pages
class App extends React.Component{
    constructor(props) {
        super(props);
        this.displaySearchedNews = this.displaySearchedNews.bind(this)
    }
    displaySearchedNews(searchTextFromChild){
        //routing to searched input
        this.props.router.push('/news-search/'+ searchTextFromChild)
    }
    render(){
        return(
            <div>
                <ToggleRoutes displaySearchedNews={this.displaySearchedNews} />
                <PlaceHolderForNavBar />
                {this.props.children}       
            </div>
        );
    }
}


export default App;