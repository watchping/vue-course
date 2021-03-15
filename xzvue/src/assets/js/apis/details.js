import axios from "axios"
import {baseURL} from "../config.js"
function getDetails(lid){
    return new Promise(
        function(resolve,reject){
            axios.get(baseURL+"/product/detail",{params:{lid}})
            .then(result=>{
                resolve(result.data);
            });
        }
    )
}

export {
    getDetails
}