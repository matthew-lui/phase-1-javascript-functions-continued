function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}

mondayWork();
mondayWork('work from home');

function wrapAdjective(outer, inner){

}


function wrapAdjective(adjective = "special") {
    const wrap = function (star = "*", wrapStick = "||") {
    return `You are, ${star}, ${wrapStick}, ${adjective}, ${wrapStick} ${star}!`
    };
    return wrapAdjective;
};
wrapAdjective();