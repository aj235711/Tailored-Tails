import React, { useState } from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
  
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
        navigate(`/?search=${searchTerm}`);
    }
    setSearchTerm("");
};

return (
    <form className="search-form" onSubmit={handleSubmit}>
        // ... (rest of the form JSX)
    </form>
);
export default SearchForm;
