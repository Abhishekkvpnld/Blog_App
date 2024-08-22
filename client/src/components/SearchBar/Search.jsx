import { useState } from "react";
import "./search.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


const Search = ({ setShowSearchbar, searchValue, setSearchValue }) => {

    const handleClose = () => {
        setShowSearchbar((prev) => !prev);
        setSearchValue("");
    }
console.log(setSearchValue)
    return (
        <>
            <div className="search_container">
                <div className="search_box">
                    <div className="search_close" >
                        <IoIosClose onClick={handleClose} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="search_icon"><IoIosSearch /></span>
                        <input type="text" name="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;