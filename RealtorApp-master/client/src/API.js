import axios from "axios";

export default {
    //Gets Real Estate from the Realtor API
    getRealestate: function(c, s) {
        console.log('API', c, s)
        return axios.get("/api/listings/search", { params: { c:c, s:s } });
    },
    savelisting: function(dataObj){
        return axios.post('api/listing/search', dataObj)
    }
    //Creat a post rout 
   // name of route, and obj with data to post
    // axios.post("name/of/route", dataobj)
}

