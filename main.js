let requestURL = 'https://leihan-ca.github.io/JSLab4/strange.json';
//create new XHR object
let request = new XMLHttpRequest();

request.open('GET', requestURL);
//request type
request.responseType = 'json';
//send the request by using send method
request.send();

//wait for the request to be returned, store the response in a variable
//invoke strange function with strange as argument
request.onload = function(){
    let strangeThings = request.response;
    console.log(strangeThings);
    strange(strangeThings);
};

function strange(jsonObj){
    let strange = jsonObj.strange;
    let section = document.querySelector('section');
    for (let i =0; i < strange.length; i++){
        //build HTML elements

        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');

        img.setAttribute('src',
            'https://leihan-ca.github.io/JSLab4/image/' + strange[i].image);
        img.setAttribute('alt', strange[i].image);

        h2.textContent = strange[i].name;
        h3.textContent = 'Price, ' + strange[i].price;
        h4.textContent = 'Details, ' + strange[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);

    }
}