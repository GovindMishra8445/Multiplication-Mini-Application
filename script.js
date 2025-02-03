const num = document.querySelector("#num");
const btn = document.querySelector("#gen");
const show = document.querySelector(".show-multiplication");
const times = document.querySelector(".number");
const headerPhoto = document.querySelector(".header-photo")


headerPhoto.addEventListener('click', function(){
    window.location.reload();
})
btn.addEventListener("click", () => {
    let t = times.value;
    show.innerHTML = null;
    let n = num.value;
    console.log(n);
    for (let i = 1; i <= t; i++) {
        let a = `${n} x ${i} = ${n * i}<br>`;
        show.innerHTML += a;
    }
});