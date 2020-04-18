const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: "35acfb24",
            s: searchTerm 
        }
    });
    console.log(response.data);
}

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        timeoutId ? clearTimeout(timeoutId) : null;
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const input = document.querySelector('input');

const onInput = (event) => {
    fetchData(event.target.value);   
}

input.addEventListener('input', debounce(onInput, 500));
