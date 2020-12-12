import React from 'react';
//import  Search  from '../search-backup/Search';

 function Nav() {
    return (
     /*    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="#">Huskies News API Search</a>
            <div className="ml-auto"><Search /></div>
        </nav> */
        <form class="form-inline">
            <input class="form-control input-lg" aria-label="Search query field" placeholder="Searc News" value=""/>
                <button type="submit" class="btn btn-dark ml-2">Search</button>
                </form>
       
     
    )
}
export default Nav;