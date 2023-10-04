const btn = document.querySelector("#toggle-box button"); // 명확한 표현
// const btn = document.querySelector("button");

btn.onclick = () => {
    document.body.classList.toggle("dark");
}