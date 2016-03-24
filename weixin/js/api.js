define([], function (){
    return {
        host: "/html5js/",
        article: {
            articlelist: {
                m: "get",
                u: "api/articlelist.json"
            },
            articleprofile: {
            	m: "get",
                u: "api/articleprofile.json"
            }
        }
    }
});