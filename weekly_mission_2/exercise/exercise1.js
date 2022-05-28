/*----------------------------------GITHUB----------------------------------*/
console.log("----------------------------")
console.log("-----------GITHUB-----------")
console.log("----------------------------")
const repo = {
    name: "LaunchX",
    author: "Alan G",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
console.log("-REPOSITORY-\nNombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title:"LaunchX",
    repositoryNameAssociated:"Launchx",
    status:"available",
    numberOfComments:1500,
    labels:"python",
    author:"AlanG",
    dateCreated:Date(),
    lastUpdate:"15/02/22",
    getTitleAndAuthor: function(){
        return "Title of the project "+this.title+" by "+this.author
    },
    getGeneralInfo: function(){
        return "\n-GENERAL INFO-\nStatus: "+this.status+"\nNumber of comments: "+this.numberOfComments+"\nDate of Creation: "+this.dateCreated
    }

}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullRequest = {
    title:"modifications",
    branchName:"Branch2",
    dateCreated:Date(),
    status:"Available",
    repositoryNameAssociated:"LaunchX",
    getStatus:function(){
        return "\n-PULL REQUEST-\nStatus of the repository: "+this.status
    },
    getTitleAndAuthor:function(){
        return "Title of the Pull Ruquest '"+this.title+"' by "+issue.author
    }
}
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
/*----------------------------------GITHUB----------------------------------*/
/*---------------------------------Twitter----------------------------------*/
console.log("----------------------------")
console.log("----------TWITTER-----------")
console.log("----------------------------")
const user = {
    user:"AlanG",
    email:"alndiaz4@gmail.com",
    userName:"AlanDiaz4",
    bio:"Un chico universitario amante de la programacion",
    age:19,
    userInfo: function(){
        return `\n-INFO ABOUT THE USER-\nUser Name: ${this.userName}\nEmail: ${this.email}\nbio: ${this.bio}`
    }
}
console.log(user.userInfo());

const trend ={
    name:"Programmer",
    topic:"technology",
    twittes:3890,
    locationHashtag:"Mexico",
    twittPrincipal:"Estoy elaborando un lenguaje de programacion que revolucionara al mundo #Programmer",
    twitts:function(){
        return`\n-TREND-\nThis is trend now #${this.name} in ${this.locationHashtag}`
    },
    twitteP:function(){
        return`Look this tweet making trend:\n@${user.userName}\n${this.twittPrincipal}\n#${this.name}\n${this.twittes} Tweets about this`
    }
}
console.log(trend.twitts())
console.log(trend.twitteP())
/*---------------------------------Twitter----------------------------------*/
/*--------------------------------Facebook----------------------------------*/
console.log("----------------------------")
console.log("---------FACEBOOK-----------")
console.log("----------------------------")

const userf = {
    name:"Andres Flores",
    age:23,
    city:"Monterrey",
    hobbys:["Videojuegos","Moda","TikTok"],
    potho:"andres.jpg",
    userI:function(){
        return `\n${this.name}\ncity :${this.city}\nHobbys of ${this.name}: ${this.hobbys}\n`
    }
}
console.log(userf.userI())
const post ={
    user:"Alan Gomez",
    feling:"None",
    date:Date(),
    text:"hola y bienvenidos a este nuevo post",
    img:"info.jpg",
    post:function(){
        return`\n${this.user}\n${this.date} ${this.feling}\n${this.text}\n${this.img}\n`
    }
}
console.log(post.post())

const biography = {
    name:"Alan Gomez",
    age:20,
    city:"Jalisco",
    hobbys:["Videojuegos","Moda","TikTok"],
    studyIn:"Universidad de Guadalajara",
    phone:3316346810,
    BornIn:"Estado de Mexico",
    relationship:"Guadalupe",
    bio:function(){
        return`${this.name}\n${this.age} years\n${this.hobbys}\nStudy in ${this.studyIn}\nPhone number ${this.phone}\nLives in ${this.city}\nBorn in ${this.BornIn}\nIn a relationship with ${this.relationship}`
    }
}
console.log(biography.bio());

/*--------------------------------Facebook----------------------------------*/
/*----------------------------------Uber------------------------------------*/
console.log("----------------------------")
console.log("-----------Uber-------------")
console.log("----------------------------")
const profile = {
    driver:"Gilberto",
    car:"Suzuki Swift",
    plates:"GPK-27-7",
    trips:2500,
    rating:4.9,
    years:3,
    from:"Jalisco, MEX",
    note:"very smooth and efficent ride",
    from:"Tonala",
    to:"tlaquepaque",
    time:45,
    prof:function(){
        return`\n      ${this.driver}\n${this.car} ${this.plates}\n\nStars   Rating  Years\n${this.trips}     ${this.rating}      ${this.years}\n`
    },
    trip:function(){
        return `Your driver ${this.driver}\n${this.car} ${this.plates}\n\nStars   Rating  Years\n${this.trips}     ${this.rating}      ${this.years}\nFrom ${this.from} to ${this.to}\n Time to arrive ${this.time} min`

    }

}
console.log(profile.prof())
console.log(profile.trip())
/*----------------------------------Uber------------------------------------*/