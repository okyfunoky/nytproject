var key = "JoBtQcUS2jkjGtZFDpxjxNArrGOKzURf"
var searchTerm = "election"


function constructUrl(searchTerm, resultCount, yearStart, yearEnd){
    var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    var keyUrl = "&api-key=" + key;

    
    console.log("year start:" + yearStart);
    console.log("year end:" + yearEnd);
    
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?
    //q=election
    //&begin_date=20120101
    //&end_date=20121231
    //&api-key=JoBtQcUS2jkjGtZFDpxjxNArrGOKzURf
    //build url sequentially
    baseUrl += searchTerm;

    //check if yearstart was set
    if(yearStart){
        //append the begin date clause to the url
        console.log("Getting here");
        baseUrl += "&begin_date=" + yearStart
    }

    //check if year end was set
    if(yearEnd){
        //append the end date clause to the url
        baseUrl += "&end_date=" + yearEnd
    }
    //add key on last
    baseUrl += keyUrl;
    return baseUrl;
}

function callNYTAPI(queryURL){
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        // this build a loop that says to do this action for every item
        // this is a for each loop
        response.response.docs.forEach(article => {
            // console.log(article.headline.main)
            parseData(article)
        });
    
      });
}

var newSearchUrl = constructUrl("france",5,"20120101","20121231");
callNYTAPI(newSearchUrl);

// parse information... new function that parses information
// we have agreed to send back two pieces of data, the title and the date
function parseData(article){
    var title = article.headline.main;
    var date = "2012";

    // $('#articlerespository').text(title);

    



}
console.log("some content:" + searchTerm);

$("#search-form").on("submit", function (event) {
    
    event.preventDefault();
    var searchTerm = $('#search-term').val();

    console.log("some content:" + searchTerm);
});

