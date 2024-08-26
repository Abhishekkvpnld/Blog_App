import "./search.css";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


const Search = ({ setShowSearchbar, searchValue, setSearchValue, handleSearch }) => {

    const handleClose = () => {
        setShowSearchbar(false);
        setSearchValue("");
    }

    return (
        <>
            <div className="search_container">
                <div className="search_box">
                    <div className="search_close" >
                        <IoIosClose onClick={handleClose} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="search_icon"><IoIosSearch onClick={handleSearch} /></span>
                        <input type="text" name="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;