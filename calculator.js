let result = "";
document.getElementById("p").innerText = result;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText === "=") {
            showResult();
        } else if (e.target.innerHTML === "AC") {
            clearResult();
        } else if (e.target.innerHTML === '⌫') {
            backspace();
        } else {
            append(e.target.innerHTML);
        }
    });
});

function append(value) {
    result += value;
    document.getElementById("p").textContent = result;
    localStorage.setItem("result", JSON.stringify(result));
    console.log(typeof result);
}

function clearResult() {
    result = "";
    localStorage.removeItem("result");
    document.getElementById("p").innerText = result;
}

function backspace() {
    result = result.slice(0, -1);
    document.getElementById("p").innerText = result;
}

function showResult() {
    try {
        result = eval(result);
        document.getElementById("p").innerText = result;
    } catch {
        document.getElementById("p").innerText = "error";
        // result = "";
    }
    // localStorage.setItem("result", JSON.stringify(result));
}