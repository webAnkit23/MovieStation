
 const options ={
method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTU0MzhhYzQyZTY4ZGM5MzYwYjRkY2I4NWVmMjY2MCIsInN1YiI6IjY1YzBkYzFjYmYwOWQxMDE2M2E3OTQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pNZuSmwAci2msdFulqeIR9ndwf7tewEUW9LjRvwWrhk',
}
};
const BASE_URL ='https://proxy-three-tawny.vercel.app/3';
const fetchData =async(url) =>{
    try{
       const res = await fetch(BASE_URL+url , options);
       const data = await res.json();
       return data;
    }
    catch{
      return new Error('Fetching not possible');
    }   
}
export default fetchData;


//https://api.themoviedb.org/3