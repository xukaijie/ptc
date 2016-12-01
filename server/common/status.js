

var  sta_ok = 200;
exports.status_ok = 200;

const status_failed=500
exports.status_login_failed = 10;


exports.getOKdata = function(){

    var ret={
        status:sta_ok,
        data:{},
        ok:true
    };

    return ret;

}


exports.getFaileddata = function(){

    var ret={
        status:status_failed,
        message:"",
        ok:false
    };

    return ret;

}