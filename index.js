const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
    animateLabel();
}
decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
    animateLabel();
}
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
    animateLabel();
}

function animateLabel() {
    countLabel.classList.add("animate");
    setTimeout(() => {
        countLabel.classList.remove("animate");
    }, 400);
}
