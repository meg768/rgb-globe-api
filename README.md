# rgb-globe-api
An API to control a rgb globe

````javascript

var API = require('rgb-globe-api');
var api = new API(id:'jbn'});

Promise.resolve().then(() => {
    return api.color({color:'red', priority:'!', duration:3000});
})
.then(() => {
    return api.blink({color:'green', duration:3000});

})
.then(() => {
    return api.flash({color:'blue', duration:3000});

})
.then(() => {
    return api.random({duration:3000});

})
.catch((error) => {
    console.log(error);
});


````
