let time = document.getElementById("timezone");
let nums = document.querySelectorAll(".num");
let container = document.querySelector(".container");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    nums.forEach((n) => {
      let start = 0;
      let end = Number(n.dataset.num);

      let count = setInterval(() => {
        start++;
        n.textContent = start;
        if (start == end) {
          clearInterval(count);
        }
      }, 2000 / end);
    });
    observer.unobserve(container);
  }
});

observer.observe(container);

function updateTime() {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
  let hours = d.getHours()

  if (hours >=18 && hours <= 6) {
    time.style.color = 'blue'
  } else {
    time.style.color = 'black'
  }
}

updateTime()

setInterval(updateTime, 1000)