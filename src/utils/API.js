import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "9d4a8986921972b65754ea0809d47c84:12:74623931";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};