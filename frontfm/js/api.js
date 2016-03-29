define([], function (){
    return {
        host: "/html5js/",
        user: {
            userlist: {
                m: "get",
                u: "api/frontfm/userlist.json"
            },
            userprofile: {
                m: "get",
                u: "api/frontfm/userprofile.json"
            }
        },
        goods: {
            goodslist: {
                m: "get",
                u: "api/frontfm/goodslist.json"
            }
        }
    }
});