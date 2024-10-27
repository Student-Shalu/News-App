import React, { useState, useEffect } from 'react';
import Card from './Card';

function NewsApp() {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "cc21a955c7de422fa0b7c679260d7dbb";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCategoryClick = (category) => {
        setSearch(category);
        getData();
    };

    return (
        <div>
            <header>
                <h1>THE NEWS TIMES</h1>
            </header>
            <nav>
                <ul>
                    <li onClick={() => handleCategoryClick("politics")}>Politics</li>
                    <li onClick={() => handleCategoryClick("sports")}>Sports</li>
                    <li onClick={() => handleCategoryClick("health")}>Health</li>
                    <li onClick={() => handleCategoryClick("entertainment")}>Entertainment</li>
                    <li onClick={() => handleCategoryClick("technology")}>Technology</li>
                    <li onClick={() => handleCategoryClick("fitness")}>Fitness</li>
                </ul>
                <div className='searchArea'>
                    <input type="text" placeholder='Search here...' value={search} onChange={handleInputChange} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div className='txtMarquee'>
                <marquee behavior="" direction="">Stay Updated With Latest News!</marquee>
            </div>
            <div>
                {newsData && <Card data={newsData} />}
            </div>
        </div>
    );
}

export default NewsApp;
