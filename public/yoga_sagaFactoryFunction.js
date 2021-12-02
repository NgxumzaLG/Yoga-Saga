function YogaSaga() {
    var player = ''
    function setPlayerName(name){
        player = name;
    }

    function getPlayerName(){
        return player;
    }

    function setScores(){

    }
    function getScores(){

    }

    return{
        setPlayerName,
        getPlayerName,
        setScores,
        getScores
    }
}