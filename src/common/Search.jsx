import React from 'react'

function Search() {
    return (
       <>
       <div className="app-search dropdown mx-2">
          <form>
            <div className="input-group">
              <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
              <span className="mdi mdi-magnify search-icon" />
            </div>
          </form>
        </div>
       </>
    )
}

export default Search
