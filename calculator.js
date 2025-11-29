let result = JSON.parse(localStorage.getItem("result")) || "";
document.getElementById("p").innerText = result;

function append(value) {
    result += value;
    document.getElementById("p").textContent = result;
    localStorage.setItem("result", JSON.stringify(result))
}

function clearResult() {
    result = "";
    localStorage.removeItem("result")
    document.getElementById("p").innerText = result;
}

function backspace() {
    result = result.slice(0, -1);
    document.getElementById("p").innerText = result;

}

function showResult() {
    try {
        result = eval(result)
        document.getElementById("p").innerText = result;
    } catch {
        document.getElementById("p").innerText = "error";
        result = ""
    }
    localStorage.setItem("result", JSON.stringify(result))
}