document.getElementById('django-button').addEventListener('click', makeRequest);

let httpRequest;

function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Could not make request!");
        return false;
    }
    httpRequest.onreadystatechange = alertResponse;
    httpRequest.open('GET', 'http://127.0.0.1:8000/tweet/');
    httpRequest.send();
}

function alertResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            // console.log(httpRequest.responseText);
            let tweetsDiv = document.getElementById('tweet');
            let tweets = JSON.parse(httpRequest.responseText);
            console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                let obj = tweets[i];
                tweetsDiv.insertAdjacentHTML('beforeend', '<div>' + obj.short_text + '</div>');
            }
        } else {
            alert("Error occured!");
        }
    }
}