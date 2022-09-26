// importing all content from model.js to app.js
import * as MODEL from "./model.js";

function route () {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";


    if(pageName == "") {
        pageContent = "portoContent";
    }

MODEL.modelPageName(pageContent);
  
}

function initListeners() {
    $(window).on("hashchange",route);
    route ();
}

$(document).ready(function (){
   
    initListeners();
   
});