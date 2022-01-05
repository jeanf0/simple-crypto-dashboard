import {useEffect, useState} from 'react';
import axios from 'axios';


function NewsFeed () {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news-live.p.rapidapi.com/news',
            headers: {
              'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
          };
          
          axios.request(options).then((response) => {
              console.log(response.data);
                setArticles(response.data)
          }).catch((error) => {
              console.error(error);
          });
    }, [])

    console.log(articles)

    const first7articles = articles?.slice(0,7)

    return (
        <div className='news-feed'>
            <h2>News Feed</h2>
            {first7articles?.map( (article, index) => (
            <div key={index}>
               <a href={article.url}><p>{article.title}</p></a> 
            </div>))}
        </div>
    );
}


export default NewsFeed;