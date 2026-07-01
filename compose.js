const button = document.getElementById("sendBtn");
const to = document.getElementById("rec1");
const subject = document.getElementById("send111");
const text = document.getElementById("text1");

button.onclick = function () {
    console.log(to.value);
    console.log(subject.value);
    console.log(text.value);
};