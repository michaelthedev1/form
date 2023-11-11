function popup() {
    let popup = document.getElementById("popup").style.display
    if (popup == 'none') {
        document.getElementById("popup").style.display = "block"
    } else {
        document.getElementById("popup").style.display = "block"
    }
}

function hidepopup() {
    document.getElementById("popup").style.display = "none"
}

function cfa() {
    let answer = document.getElementById("answer").value
    if (answer == "") {
        popup()
        return false;
    } else {
        document.getElementById("pageone").style.display = "none"
        document.getElementById("pagetwo").style.display = "block"
        let input = document.getElementById("answer").value
        let lowercaseAnswer = input.toLowerCase()
        if (lowercaseAnswer == "pancakes") {
            document.getElementById("insertanswer").innerHTML = ("I also really like " + lowercaseAnswer)
        }
        if (lowercaseAnswer == "waffles") {
            document.getElementById("insertanswer").innerHTML = ("You like " + lowercaseAnswer + "? I prefer pancakes.")
        }
        if (lowercaseAnswer !== "pancakes") {
            if (lowercaseAnswer !== "waffles") {
                document.getElementById("insertanswer").innerHTML = ("Well, okay then!")
            }
        }
    }
}

function pageone() {
    document.getElementById("pageone").style.display = "block"
    document.getElementById("pagetwo").style.display = "none"
    document.getElementById("answer").value = null
}