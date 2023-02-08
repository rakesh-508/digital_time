
 const hour = document.getElementById("hr");
 const minutes = document.getElementById("min");
 const seconds = document.getElementById("sec");
 const am = document.getElementById("ampm");
 function updateClock()
 {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm= "AM";
    if(h>12)
    {
        ampm="PM";
        h=h-12;
    }
    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    am.innerHTML=ampm;

    setTimeout( ()=>{
        updateClock()
    }, )
 }
 
 updateClock();
  function showContent() {
    let targetTime = new Date("2023-02-02T22:24:01");
    let currentTime = new Date();
    let q11 = document.getElementById("q11");
    let q1 = document.getElementById("q1");

    if (currentTime >= targetTime)
    {
         q11.classList.remove("p22");
         q1.classList.remove("p2");
         q11.classList.add("p11");
         q1.classList.add("p1");

    }
  }
  showContent();  