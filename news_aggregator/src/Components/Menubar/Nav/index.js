import React from 'react';
import classes from './index.css';
import  Search  from '../../search-backup/Search';
import {Link} from 'react-router-dom';


 function Nav() {
    return (
      //  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      //      <a className="navbar-brand" href="#">Huskies News API Search</a>
       //     <div className="ml-auto"><Search /></div>
     //   </nav>
        <div className="nav-search">
            <form className="form-inline">
         
                <input className="form-control input-lg" aria-label="Search query field" placeholder="Search News"/> 
                <Link to="/SearchResults"><button type="submit" className="btn btn-dark ml-2">Search </button>      
             </Link>
                    </form>
                    </div>
                    
    )
}
export default Nav;