var API = require('./index.js');
var api = new API({debug:true, id:'jbn'});

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
