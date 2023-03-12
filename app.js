// const gifs = document.getElementById('gifs');
// let submit = document.getElementById('submit');
// const reset = document.getElementById('reset');
// let search = document.querySelector('input');

// async function searchGIF() {
//     let res = await axios.get('https://api.giphy.com/v1/gifs/search' , {
//         params: {
//         q: search,
//         api_key: 'eJzdlfZP9lmvrJuqG6fhXoomeItHuytT'
//     }});
//     let randomGIF = Math.floor(Math.random());
//     let gifURL = res.data.data[randomGIF].images.original.url;
//     let img = document.createElement('img');
//     img.src = gifURL;
//     gifs.appendChild(img);
// }
// submit.addEventListener('click', function(e) {
//     e.preventDefault();
//     searchGIF(search);
// })

// reset.addEventListener('click', function(e) {
//     e.preventDefault();
//     gifs.innerHTML = '';
// })

const $gifs = $("#gifs");
const $search = $("#search");
const reset = document.getElementById('reset');


function addGIF(res) {
    let numResults = res.data.length;
    if (numResults) {
        let random = Math.floor(Math.random() * numResults);
        let $newGIF = $("<img>", {
            src: res.data[random].images.original.url
        });
        // ranGIF = res.data[random].images.original.url;
        // let img = new Image();
        // img.src = ranGIF;
        // let newGIF = document.createElement('img');
        // img.src = res.data[random].images.original.url;
        // newGIF.setAttribute('src', img);
        // img.src = res.data[random].images.original.url;
        $gifs.append($newGIF);
    }
}

$("form").on("submit", async function(e) {
    e.preventDefault();
    let searchTerm = $search.val();
    $search.val("");
    let response = await axios.get('https://api.giphy.com/v1/gifs/search' , {
        params: {
        q: searchTerm,
        api_key: 'eJzdlfZP9lmvrJuqG6fhXoomeItHuytT'
    }});
    addGIF(response.data)
});

reset.addEventListener('click', function(e) {
    e.preventDefault();
    $gifs.empty();
})