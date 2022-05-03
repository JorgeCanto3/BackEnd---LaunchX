//Twitter

const user = {
    Name_of_user: "Jorge Canto",
    UserName: "JorgeCanto2002",
    Bio: "Web Developer",
    Followers: 14,
    Following: 71,
    User_Join: "User join June of 2017",
    RT: 894,
    likes: 89,
    NumberTweets: 99,
    Location: "Mexico",
    Name: "#Hashtag Name",
    Time: "12:00",
    PrinipalTopic: "Evento:",
    ThemTopic: "Tendencia de 'Evento'",
    tabsTredening: "Sin texto",
    ForU: "Para ti",
    Trends: "Tendencias",
    News: "Noticias",
    Sports: "Deportes",
    Trend1: "Primer Trend",
    HashTag1: "#Trend1",
    NumTweets1: "##### de Tweets",
    Trend2: "Segundo Trend",
    HashTag2: "#Trend2",
    NumTweets2: "##### de Tweets",
    Trend3: "Tercer Trend",
    HashTag3: "#Trend3",
    NumTweets3: "##### de Tweets",
    Trend4: "Cuarto Trend",
    HashTag4: "#Trend4",
    NumTweets4: "##### de Tweets",


    getuser: function () {
        return `perfil de ${this.Name_of_user}`
    },
    getTrendsandHAshtags: function () {
        return `Trending:  ${this.ForU} | Hastag: ${this.HashTag1}`
    },

    getLikesandRt: function () {
        return `Likes: ${this.likes} Rt: ${this.RT}`
    },
    getLocation: function () {
        return `Es de: ${this.Location} `
    }
}

console.log("Estas en Twitter en : " + user.getuser());
console.log("Tendencias actuales:  " + user.getTrendsandHAshtags());
console.log(user.getLikesandRt());
console.log(user.getLocation());


//Facebook