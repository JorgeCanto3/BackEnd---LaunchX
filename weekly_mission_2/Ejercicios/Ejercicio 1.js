//Github
const repo = {
    name: "LaunchX",
    author: "JorgeCanto3",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "Ejercicio 1 Github",
    repoNameAssociated: "CarloGilmar",
    Status: "Open Issue",
    NumberOComments: 45,
    Labels: "Issue",
    Author: "JorgeCanto3",
    DateCreated: "02 of April of 2022",
    LastUpdated: "02 of May of 2022",

    getTitleAndAuthor: function () {
        return this.title + this.repoNameAssociated
    },
    getGeneralInfo: function () {
        return `This issue ${this.title} was created on the repo associated with ${this.repoNameAssociated}`
    }
}

console.log(issue.getGeneralInfo())

const PullRequest = {
    title: "Pull Request Node.js",
    BranchName: "GitHub Excercise 1",
    DateCreated: "03 of May of Abril",
    Status: "Closed",
    repoNameAssociated: "JorgeCanto3",

    getStatus: function () {
        return this.Status
    },

    getTitleAndAuthor: function () {
        return `${this.repoNameAssociated} create a Pullrquest and named ${this.title}  `
    }
}

console.log(PullRequest.getTitleAndAuthor() + "and the status is " + PullRequest.getStatus())
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

//Facebook//
const Fuser = {
    FullName: "Jorge Luis Santiago Canto",
    UserName: "Jorge Canto",
    Friends: 250,
    Location: "Lives in: Ciudad de Mexico",
    Join: "Join: December of 2010",
    LStatus: "Single",
    Studies: "Studies at UAM Xochimilco",
    ProfileTabs: ["Posts", "Information", "Friends", "Photos"],

    getName: function () {
        return ` User Name is  ${this.UserName} `
    },
    getLocation: function () {
        return `He ${this.Location}`
    }
}

const Post = {
    TextPost: "A good meme",
    Time: "10 hrs ago",
    WhoSee: "OnlyFriends",
    Likes: 10,
    Share: 5,

    getLikes: function () {
        return `has this number of likes: ${this.Location} `
    },
    gettime: function () {
        return `was publish ${this.Time}`
    }
}

console.log("This profile" + Fuser.getName() + "and " + Fuser.getLocation())
console.log("His last post " + Post.getLikes() + "and" + Post.gettime())