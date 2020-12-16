import React from 'react';
import './searchbar.css';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <h2 className="logo"><img style={{width:'200px', height:'100px',justifyContent:'center'}} className="logo" src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
            <br></br>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
                <br></br>
            </div>
            </>
        )
    }
}
export default Searchbar;
