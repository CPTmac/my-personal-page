const words = [
  "Web Developer",
  "Cybersecurity Enthusiast",
  "Software Engineer",
  "logo Designer",
];

const target = document.getElementById("typed");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function loop(){

  const word = words[wordIndex];

  // كتابة أو مسح
  if(deleting){
    charIndex--;
  } else {
    charIndex++;
  }

  target.textContent = word.substring(0, charIndex);

  let speed = deleting ? 40 : 80;

  // نهاية الكلمة
  if(!deleting && charIndex === word.length){
    deleting = true;
    speed = 1200; // pause
  }

  // نهاية المسح
  if(deleting && charIndex === 0){
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(loop, speed);
}

loop();

const btn = document.querySelector(".dropbtn");
const menu = document.querySelector(".dropdown-content");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("open");
});

menu.addEventListener("click", (e)=>{
  e.stopPropagation();
});

document.addEventListener("click", ()=>{
  menu.classList.remove("open");
});

const backTop = document.getElementById("backTop");

// يظهر لما تنزل
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 300){
    backTop.classList.add("show");
  }else{
    backTop.classList.remove("show");
  }
});

// يرجع لفوق
backTop.addEventListener("click", ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const cards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){

      entry.target.classList.add("show");

      const bar = entry.target.querySelector(".bar span");
      bar.style.width = bar.dataset.width;

    }
  });
},{ threshold:0.3 });

cards.forEach(card=>{
  const bar = card.querySelector(".bar span");

  // نخزن النسبة
  bar.dataset.width = bar.style.width;
  bar.style.width = 0;

  observer.observe(card);
});

const form = document.querySelector("form");
const statusBox = document.getElementById("form-status");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    statusBox.className="form-status show";
    statusBox.textContent="Launching transmission... 🚀";

    const data = new FormData(form);

    try{
        const res = await fetch(form.action,{
            method:"POST",
            body:data,
            headers:{ 'Accept': 'application/json' }
        });

        if(res.ok){

            statusBox.className="form-status success show";
            statusBox.innerHTML =
            "Message received.<br>Systems processing your idea 🧠⚡";

            form.reset();

        }else{
            throw new Error();
        }

    }catch{

        statusBox.className="form-status error show";
        statusBox.innerHTML =
        "Transmission failed.<br>Try again or contact directly.";
    }
});

const cards1 = document.querySelectorAll(".project-card");
const services = document.querySelectorAll(".service-card");

/* reveal animation */
const observer3 = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)
        e.target.classList.add("show");
  });
},{threshold:.2});

cards1.forEach(c=>observer3.observe(c));

/* فلترة عند الضغط */
services.forEach(s=>{
  s.addEventListener("click", ()=>{

    const cat = s.dataset.filter;

    document
      .getElementById("portfolio")
      .scrollIntoView({behavior:"smooth"});

    cards1.forEach(card=>{
        card.style.display =
          card.dataset.cat === cat ? "block" : "none";
    });

  });

});
<div class="menu-toggle" onclick="toggleMenu()">☰</div>

