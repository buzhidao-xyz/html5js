define([], function (){
    return {
        host: "/html5js/",
        article: {
            articlelist: {
                m: "get",
                u: "api/articlelist.json"
            },
            articlehotlist: {
                m: "get",
                u: "api/articlehotlist.json"
            },
            articleremlist: {
                m: "get",
                u: "api/articleremlist.json"
            },
            articleprofile: {
            	m: "get",
                u: "api/articleprofile.json"
            }
        }
    }
});