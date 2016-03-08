define([], function (){
    return {
        host: "/html5js/",
        userlist: {
            m: "get",
            u: "api/userlist.json"
        },
        userprofile: {
        	m: "get",
        	u: "api/userprofile.json"
        }
    }
});