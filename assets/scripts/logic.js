var key = "JoBtQcUS2jkjGtZFDpxjxNArrGOKzURf"
var searchTerm = "election"


function constructUrl(searchTerm, resultCount, yearStar, yearEnd){
    var baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
    var keyUrl = "&api-key=" + key;

    baseUrl += searchTerm;
    baseUrl += keyUrl;
}