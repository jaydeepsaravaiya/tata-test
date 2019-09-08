//https://newsapi.org
const NEWS_API_KEY = "8ccc54c62cd84e5284ec3414f7fbc152"
//https://developers.themoviedb.org
const EVENTS_API_KEY = "4a8a477e3b087af4b8a1539e56a0cbf9"

const TIME_OUT = 10000;
export function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + NEWS_API_KEY;
    return new Promise((res, rej) => {
        let to = setTimeout(rej, TIME_OUT, 'Timed Out')
        fetch(url).then(response => { clearTimeout(to); return res(response.json()) }).catch(rej);
    });
}
export function getEvents() {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + EVENTS_API_KEY ;

        return new Promise((res, rej) => {
        let to = setTimeout(rej, TIME_OUT, 'Timed Out')
        fetch(url).then(response => { clearTimeout(to); return res(response.json()) }).catch(rej);
    });
}
export function getMovie(id){
    const url = 'https://api.themoviedb.org/3/movie/'+id +"?api_key=" + EVENTS_API_KEY ;
    console.log(url);
        return new Promise((res, rej) => {
        let to = setTimeout(rej, TIME_OUT, 'Timed Out')
        fetch(url).then(response => { clearTimeout(to); return res(response.json()) }).catch(rej);
    });
}