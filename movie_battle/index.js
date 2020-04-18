const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "35acfb24",
            s: searchTerm 
        }
    });
    console.log(response.data);
}

const input = document.querySelector('input');

let timeoutId;
const onInput = (event) => {
    if (timeoutId) clearTimeout(id);
   timeoutId = setTimeout(() => {
        const value = event.target.value;
        fetchData(value);
    }, 500)
    
}
input.addEventListener('input', onInput);
