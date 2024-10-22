const userInfo = {
    usn: "cutiepie",
    pw: "24122023"
}

function loginFunc() {
    let username = document.getElementById("usn").value.trim().toLowerCase();
    let password = document.getElementById("pw").value;

    if(username === "" || password === ""){
        alert("Kotaknya gaboleh kosong woe");
        }
        else if(username !== userInfo.usn.toLowerCase()){
            alert("salahh usnnyaa wkwk coba lagii");
        }
        else if(password !== userInfo.pw) {
            alert("passwordnya yang salah nih, masa bisa salah:(");
        }
        else{
            alert("Selamat semuanya udah benerr hehehe!!!");
            let loginPage = document.getElementById("loginPage");
            if(loginPage){
                loginPage.style.display="none";
            }

           let home = document.getElementById("homepage");

           if(home) {
            home.style.display="block";
           }
        }

        }

        function sub1Func() {
            let answer = document.getElementById("answer1").value.trim();
            const ans1 = ["Gultik","Blok M", "Gultik Blok M","gultik","blok m","gultik blok m"];

            if(ans1.includes(answer)){
                alert("Betullll!!!");
                let home = document.getElementById("homepage");
                if(home){
                    home.style.display="none";
                }

                let page1 = document.getElementById("page1");

                if(page1){
                    page1.style.display="block";
                }
            } else if(answer === ""){
                alert("gaboleh kosong tw, coba jawab");
            } else {
                alert("Salah Wleee :p")
               
            }

            
        }

    function nextBtn(){
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let video = document.getElementById("firstDate");
    if(page1){
        page1.style.display="none";
        page2.style.display="block";
    }
    if(page1.style.display === "none"){
      if(!video.paused){
        video.pause();
        video.currentTime = 0;
      }
    }
    
}

const slideshowContainer = document.querySelector('.slideshow-container');
const imageUrls = [
'/assets/5.jpg',
'/assets/6.JPG',
'/assets/7.jpg',
'/assets/8.jpg',
'/assets/9.jpg',
'/assets/10.jpg',
'/assets/11.jpg',
'/assets/12.jpg',
'/assets/13.jpg',
'/assets/14.jpg',
'/assets/15.JPG',
'/assets/16.JPG',
'/assets/17.jpg',
'/assets/18.JPG',
'/assets/19.PNG',
'/assets/20.JPG',
'/assets/21.JPG',
'/assets/22.JPG',
'/assets/23.JPG',
'/assets/24.JPG',
'/assets/25.jpg',
'/assets/26.JPG',
'/assets/27.jpg',
'/assets/29.jpg',
'/assets/30.jpg',
'/assets/31.jpg',
'/assets/32.JPG',
'/assets/33.JPG',
'/assets/34.JPG',
'/assets/35.jpg',
'/assets/36.jpg',
'/assets/37.jpg',
'/assets/38.jpg',
'/assets/39.jpg',
'/assets/40.jpg',
'/assets/41.JPG',
'/assets/42.JPG',
'/assets/43.JPG',
'/assets/44.JPG',
'/assets/45.JPG',
'/assets/46.JPG',
'/assets/47.JPG',
'/assets/49.JPG',
'/assets/50.JPG',
'/assets/51.JPG',
'/assets/52.JPG',
'/assets/53.JPG',
'/assets/54.JPG',
'/assets/55.JPG',
'/assets/56.JPG',
'/assets/57.JPG',
'/assets/58.JPG',
'/assets/59.JPG',
'/assets/60.JPG',
'/assets/61.JPG',
'/assets/62.JPG',
'/assets/63.JPG',
'/assets/64.JPG',
'/assets/65.JPG',
'/assets/66.JPG',
'/assets/67.JPG',
'/assets/68.JPG',
'/assets/69.JPG',
'/assets/70.JPG',
'/assets/71.jpg',
'/assets/72.jpg',
'/assets/73.jpg',
'/assets/74.jpg',
'/assets/75.JPG',
'/assets/76.JPG',
'/assets/77.jpg',
'/assets/78.jpg',
'/assets/79.jpg',
'/assets/80.jpg',
'/assets/81.JPG',
'/assets/82.JPG',
'/assets/83.JPG',
'/assets/84.JPG',
'/assets/85.JPG',
'/assets/86.JPG',
'/assets/87.jpg',
'/assets/88.jpg',
'/assets/89.jpg',
'/assets/90.jpg',
'/assets/91.jpg',
'/assets/92.jpg',
'/assets/93.jpg',
'/assets/94.jpg',
'/assets/95.jpg',
'/assets/96.jpg',
'/assets/97.jpg',
'/assets/98.JPG',
'/assets/99.JPG',
'/assets/100.JPG',
'/assets/101.JPG',
'/assets/102.jpg',
'/assets/103.jpg',
'/assets/104.jpg',
'/assets/106.JPG',
'/assets/107.jpg',
'/assets/108.JPG',
'/assets/109.JPG',
'/assets/110.JPG',
'/assets/111.JPG',
'/assets/112.JPG',
'/assets/113.JPG',
'/assets/114.JPG',
'/assets/115.JPG',
'/assets/116.jpg',
'/assets/117.JPG',
'/assets/118.JPG',
'/assets/119.JPG',
'/assets/120.JPG',
'/assets/121.JPG',
'/assets/122.JPG',
'/assets/123.JPG',
'/assets/124.jpg',
'/assets/125.jpg',
'/assets/126.jpg',
'/assets/127.jpg',
'/assets/128.JPG',
'/assets/129.JPG',
'/assets/130.JPG',
'/assets/131.JPG',
'/assets/132.JPG',
'/assets/133.jpg',
'/assets/134.jpg',
'/assets/135.jpg',
'/assets/136.JPG',
'/assets/137.jpg',
'/assets/138.jpg',
'/assets/139.jpg',
'/assets/140.JPG',
'/assets/141.JPG',
'/assets/142.jpg',
'/assets/143.jpg',
'/assets/144.JPG',
'/assets/145.JPG',
'/assets/146.jpg',
'/assets/147.jpg',
'/assets/148.JPG',
'/assets/149.JPG',
'/assets/150.JPG',
'/assets/151.JPG',
'/assets/152.JPG',
'/assets/153.JPG',
'/assets/154.jpg',
'/assets/155.jpg',
'/assets/156.jpg',
'/assets/157.JPG',
'/assets/158.JPG',
'/assets/159.JPG',
'/assets/160.JPG',
'/assets/161.jpg',
'/assets/162.jpg',
'/assets/163.jpg',
'/assets/164.jpg',
'/assets/165.JPG',
'/assets/166.JPG',
'/assets/167.JPG',
'/assets/168.JPG',
'/assets/169.JPG',
'/assets/170.jpg',
'/assets/171.JPG',
'/assets/172.JPG',
'/assets/173.jpg',
'/assets/174.jpg',
'/assets/175.JPG',
'/assets/176.JPG',
'/assets/177.jpg',
'/assets/178.JPG',
'/assets/179.jpg',
'/assets/180.JPG',
'/assets/181.JPG',
'/assets/182.JPG',
'/assets/183.JPG',
'/assets/184.JPG',
'/assets/185.JPG',
'/assets/186.JPG',
'/assets/187.JPG',
'/assets/105.jpg'
]
let slideIndex = 0;
let slideInterval;
let audio = document.getElementById("slideshowAudio");

imageUrls.forEach(url => {
  const div = document.createElement('div');
  div.className = 'mySlides';
  const img = document.createElement('img');
  img.src = url;
  div.appendChild(img);
  slideshowContainer.appendChild(div);
});


function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let lastBtn = document.getElementById('lastBtn');
  let text1 = document.getElementById('text1');
  let audio = document.getElementById("slideshowAudio");


  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex++;
  
  if (slideIndex > slides.length) {
      clearTimeout(slideInterval);
      slideIndex = slides.length;

      if (text1) {
          text1.style.display = "none";
      }
      if (lastBtn) {
          lastBtn.style.display = "block";
      }

  } else {
      slides[slideIndex - 1].style.display = "block";
      slideInterval = setTimeout(showSlides, 500);

      if (audio.paused) {
          audio.play();
          audio.volume = 0.2;
      }
  }
}




function stopSlides() {
  let audio = document.getElementById("slideshowAudio");
  clearTimeout(slideInterval);

  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0; 
  }
}

function lastBtn(){
  let page3 = document.getElementById('page3');
  document.getElementById("lastPage").classList.add('popup-open');
  document.querySelector('.popup-overlay').classList.add('popup-open');

  if(page3){
    page3.style.display="none";
  }


  stopSlides();
}

document.addEventListener('DOMContentLoaded', function() {
  showSlides(); 

  let video = document.getElementById('officiallyVid');
  let currentSection = document.getElementById('page2');

  video.addEventListener('ended', function() {
    let nextSection = document.getElementById('page3');
    
    currentSection.style.display = "none";
    
    if (nextSection) {
      nextSection.style.display = "block";
      if (nextSection.style.display === "block") {
        clearTimeout(slideInterval);
        slideIndex = 0; 
        showSlides(); 
      }
    }
  });
});

document.getElementById('ratingBtn').addEventListener('click', function() {
  document.getElementById('ratingPage').classList.add('popup-open');
  document.querySelector('.popup-overlay').classList.add('popup-open');
});


const stars = document.querySelectorAll('.star');
let ratingValue = 0;

stars.forEach(star => {
  star.addEventListener('click', function() {
    ratingValue = this.getAttribute('data-value');
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < ratingValue; i++) {
      stars[i].classList.add('selected');
    }
  });
});


document.getElementById('submitBtn').addEventListener('click', function() {
  const message = document.getElementById('pesan').value;

  if (ratingValue === 0) {
    alert("Isi dongg jangan dikosongin wkwk");
    return;
  }

  const ratingData = {
    rating: ratingValue,
    comment: message
  };

  
  fetch('http://localhost:3000/rating', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ratingData)
  })
  .then(response => response.text())
  .then(data => {
    alert("Maaciii sudah rating websitenyaa!");
    document.getElementById('ratingPage').classList.remove('popup-open');
    document.querySelector('.popup-overlay').classList.remove('popup-open');
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault(); 
        button.click(); 
      }
    });
  });
});
