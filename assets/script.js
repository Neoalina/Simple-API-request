document.addEventListener("DOMContentLoaded", function() {
    generateQuate();
    
    });

    function generateQuate(){
        fetch("https://favqs.com/api/qotd")
        .then(response => response.json())
        .then(quote => {
        document.getElementById('quote').innerHTML=quote.quote.body; 
    }).catch(error => console.log(error));
    }    