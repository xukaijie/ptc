var express = require('express');

var status = require('../common/status.js');
var userTable = require('../common/user.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {

    var name = req.body.name;
    var password = req.body.password;
    var ret = {};

    console.log("user login")
    console.log(userTable.userTable.length)

    for (var i = 0;i < userTable.userTable.length;i++){

        if (userTable.userTable[i].name == name && userTable.userTable[i].password == password){

            ret.status = status.status_ok;
            ret.data={};
            ret.data.user={}
            ret.data.user.mobile = userTable.userTable[i].mobile;
            ret.data.user.id = userTable.userTable[i].id;
            res.json(ret)

        }else{
            ret.message="login failed"
            res.status(status.status_login_failed);
            res.json(ret)
        }
    }

});


module.exports = router;
