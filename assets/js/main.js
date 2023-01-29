
fetch("../assets/data/Hebesatz-data.json")
.then(response => response.json())
.then(data => gemeindenNW(data));

let gemeindenNW = (data) => {
        
        let NW = data.NW
        for(let i = 1; i <= NW.length-1; i++){
        console.log(NW[i].Gemeindebezeichnung , NW[i].Column2);
        }
}

fetch("../assets/data/Hebesatz-data.json")
.then(response => response.json())
.then(data => gemeindenBB(data));

let gemeindenBB = (data) => {
        
        let BB = data.BB
        for(let i = 1; i <= BB.length-1; i++){
        console.log(BB[i].Gemeindebezeichnung , BB[i].Column2);
        }
}




/**
 * TODO: Only first loop in function is working ------- workaround with fetch and function for every array
 * TODO: Better solution would be all states in one function
 */
