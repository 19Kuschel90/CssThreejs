class CMyTime {

    constructor(Name = "SERVER") {
        this.Name = Name;
    }

    ////////////////////////////////////////////
    // return time as string
    getTimeNow() {
        var dt = new Date();
        var utcDate = dt.toUTCString();
        return utcDate;
    }

    /////////////////////////////////////////////////
    // return void and post cosole log
    CL(Srting) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log(this.getTimeNow() + " " + this.Name + ": " + Srting);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

    }
}
var time = new CMyTime();

var express = require('express');
const path = require('path');
var app = express();
const root = './dist/public'; // export folder
const port = 4050;
var server = app.listen(process.env.PORT || port);
app.use(express.static(root));
app.set('port', process.env.PORT || port); // z.B: PORT=9000 npm start
time.CL('is running ' + app.get('port'));

app.use(express.static(root));



// index.html
app.get('/', function(request, response) {
    // time.CL('requst is  ' + request);
    response.sendFile(path.resolve(__dirname, root, 'index.html'));
});