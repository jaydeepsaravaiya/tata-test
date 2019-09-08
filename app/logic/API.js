const NEWS_API_KEY="8ccc54c62cd84e5284ec3414f7fbc152"
//There is no Events API KEY
const EVENTS_API_KEY=""


export function getNews() {
        const url =  "https://newsapi.org/v2/top-headlines?country=us&apiKey="+NEWS_API_KEY;
        return new Promise((res,rej)=>{
        fetch(url).then(response=>res(response.json())).catch(rej);
    });
}
export function getEvents() {
    const url =  "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"+EVENTS_API_KEY;
    return new Promise((res,rej)=>{
    fetch(url).then(response=>res(response.json())).catch(rej);
});
}