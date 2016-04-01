define([], function (){
    return {
        host: "/html5js/",
        article: {
            articlelist: {
                m: "get",
                u: "api/weixin/articlelist.json"
            },
            articlehotlist: {
                m: "get",
                u: "api/weixin/articlehotlist.json"
            },
            articleremlist: {
                m: "get",
                u: "api/weixin/articleremlist.json"
            },
            articleprofile: {
            	m: "get",
                u: "api/weixin/articleprofile.json"
            }
        },
        user: {
            userprofile: {
                m: "get",
                u: "api/weixin/userprofile.json"
            }
        },
        cell: {
            celllist: {
                m: "get",
                u: "api/weixin/celllist.json"
            }
        }
    }
});