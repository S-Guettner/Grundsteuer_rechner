
fetch("../assets/data/Hebesatz-data.json")
.then(response => response.json())
.then(data => gemeindeNamen(data));


let gemeindeNamen = (data) => {
        
        let NW = data.NW
        for(let i = 1; i <= NW.length; i++){
        console.log(NW[i].Gemeindebezeichnung , NW[i].Column2);
        }
/*         let BB = data.BB
        for(let i = 1; i <= BB.length; i++){
        console.log(BB[i].Gemeindebezeichnung , BB[i].Column2);
        } */
}

/* *TODO: */

/**
 * TODO: Only first loop in function is working ------- workaround with fetch and function for every array?
 */
