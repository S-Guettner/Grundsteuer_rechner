
fetch("../assets/data/Hebesatz-data.json")
.then(response => response.json())
.then(data => gemeindeNamen(data));

let gemeindeNamen = (data) => {
    console.log(data.BB);
    let test1 = data.BB[1]
    console.log(test1);
}

