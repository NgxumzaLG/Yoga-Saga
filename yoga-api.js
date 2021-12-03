var poseList = [
    {
        image:"./images/chairPose.jpg",
        name: 'chair pose'
    },
    {
        image:"./images/disko.jpg",
        name:'disko pose'
    },
    {
        image:"./images/bendingTree.png",
        name:'bending tree'
    },
    {
        image:"./images/MJ.jpg",
        name: 'Michael Jackson'

    },
    {
        image:"./images/triangleForward.jpg",
        name:'triangle forward'
    },
    {
        image:"./images/warrior_pose.jpg",
        name:'warrior pose'
    },
    {
        image:"./images/yogaTreePose.jpg",
        name: 'tree pose'
    },
    {
        image:"./images/stand.jpeg",
        name: 'tree pose'
    }
];

var players = ['Lusanda','Peggy','Vhonani','Ishmael'];
var scores = [25,10,15,30];

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

function randomNumberNotLessThan(lowest, range){
    return lowest + randomNumber(range);
}

var plays = [];

function createPlay(){
    const pose = poseList[randomNumber(4)];
    const score = scores[pose][randomNumber(4)]

    return {
        pose,
        score
    }
}
const listChallenges = function(){
    if(plays.length === 0){
        plays.push(createPlay())
    }
    return plays;
}

module.exports = (pool)=>{

    

    return{

    }
}