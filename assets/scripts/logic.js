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
      });
}

var newSearchUrl = constructUrl("france",5,"20120101","20121231");
callNYTAPI(newSearchUrl);


