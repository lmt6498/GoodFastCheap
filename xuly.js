function Check(chk) {
    let x = document.getElementById("c1").checked;
    let y = document.getElementById("c2").checked;
    let z = document.getElementById("c3").checked;
    let id = chk.id;
    if (x == true && y == true && z == true) {
        if (id == "c1") {
            document.getElementById("c3").checked = false;
        }
        if (id == "c2") {
            document.getElementById("c1").checked = false;
        }
        if (id == "c3") {
            document.getElementById("c2").checked = false;
        }
    }
}