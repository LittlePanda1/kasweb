const userInfo = {
    usn: "CutiePie",
    pw: "24122023"
}

function loginFunc() {
    let username = document.getElementById("usn").value;
    let password = document.getElementById("pw").value;

    if(username === "" || password === ""){
        alert("Kotak tidak boleh kosong!");
        }
        else if(username !== userInfo.usn){
            alert("Username anda salah!");
        }
        else if(password !== userInfo.pw) {
            alert("Password anda salah!");
        }
        else{
            alert("Selamat Anda Berhasil Login!!!");
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
    if(page1){
        page1.style.display="none";
        page2.style.display="block";
    }
    
}

const slideshowContainer = document.querySelector('.slideshow-container');
const imageUrls = [
'/assets/5.heic',
'/assets/6.JPG',
'/assets/7.heic',
'/assets/8.heic',
'/assets/9.heic',
'/assets/10.heic',
'/assets/11.heic',
'/assets/12.heic',
'/assets/13.heic',
'/assets/14.heic',
'/assets/15.JPG',
'/assets/16.JPG',
'/assets/17.heic',
'/assets/18.JPG',
'/assets/19.PNG',
'/assets/20.JPG',
'/assets/21.JPG',
'/assets/22.JPG',
'/assets/23.JPG',
'/assets/24.JPG',
'/assets/25.heic',
'/assets/26.JPG',
'/assets/27.heic',
'/assets/28.HEIF',
'/assets/29.heic',
'/assets/30.heic',
'/assets/31.heic',
'/assets/32.JPG',
'/assets/33.JPG',
'/assets/34.JPG',
'/assets/35.heic',
'/assets/36.heic',
'/assets/37.heic',
'/assets/38.heic',
'/assets/39.heic',
'/assets/40.heic',
'/assets/41.JPG',
'/assets/42.JPG',
'/assets/43.JPG',
'/assets/44.JPG',
'/assets/45.JPG',
'/assets/46.JPG',
'/assets/47.JPG',
'/assets/48.MP4',
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
'/assets/71.heic',
'/assets/72.heic',
'/assets/73.heic',
'/assets/74.heic',
'/assets/75.JPG',
'/assets/76.JPG',
'/assets/77.heic',
'/assets/78.heic',
'/assets/79.heic',
'/assets/80.heic',
'/assets/81.JPG',
'/assets/82.JPG',
'/assets/83.JPG',
'/assets/84.JPG',
'/assets/85.JPG',
'/assets/86.JPG',
'/assets/87.heic',
'/assets/88.heic',
'/assets/89.jpg',
'/assets/90.heic',
'/assets/91.heic',
'/assets/92.heic',
'/assets/93.heic',
'/assets/94.jpg',
'/assets/95.jpg',
'/assets/96.jpg',
'/assets/97.heic',
'/assets/98.JPG',
'/assets/99.JPG',
'/assets/100.JPG',
'/assets/101.JPG',
'/assets/102.heic',
'/assets/103.heic',
'/assets/104.heic',
'/assets/105.HEIF',
'/assets/106.JPG',
'/assets/107.heic',
'/assets/108.JPG',
'/assets/109.JPG',
'/assets/110.JPG',
'/assets/111.JPG',
'/assets/112.JPG',
'/assets/113.JPG',
'/assets/114.JPG',
'/assets/115.JPG',
'/assets/116.heic',
'/assets/117.JPG',
'/assets/118.JPG',
'/assets/119.JPG',
'/assets/120.JPG',
'/assets/121.JPG',
'/assets/122.JPG',
'/assets/123.JPG',
'/assets/124.HEIC',
'/assets/125.HEIC',
'/assets/126.heic',
'/assets/127.heic',
'/assets/128.JPG',
'/assets/129.JPG',
'/assets/130.JPG',
'/assets/131.JPG',
'/assets/132.JPG',
'/assets/133.HEIC',
'/assets/134.HEIC',
'/assets/135.HEIC',
'/assets/136.JPG',
'/assets/137.HEIC',
'/assets/138.heic',
'/assets/139.HEIC',
'/assets/140.JPG',
'/assets/141.JPG',
'/assets/142.HEIC',
'/assets/143.HEIC',
'/assets/144.JPG',
'/assets/145.JPG',
'/assets/146.HEIC',
'/assets/147.HEIC',
'/assets/148.JPG',
'/assets/149.JPG',
'/assets/150.JPG',
'/assets/151.JPG',
'/assets/152.JPG',
'/assets/153.JPG',
'/assets/154.HEIC',
'/assets/155.HEIC',
'/assets/156.HEIC',
'/assets/157.JPG',
'/assets/158.JPG',
'/assets/159.JPG',
'/assets/160.JPG',
'/assets/161.HEIC',
'/assets/162.HEIC',
'/assets/163.HEIC',
'/assets/164.HEIC',
'/assets/165.JPG',
'/assets/166.JPG',
'/assets/167.JPG',
'/assets/168.JPG',
'/assets/169.JPG',
'/assets/170.HEIC',
'/assets/171.JPG',
'/assets/172.JPG',
'/assets/173.HEIC',
'/assets/174.HEIC',
'/assets/175.JPG',
'/assets/176.JPG',
'/assets/177.heic',
'/assets/178.JPG',
'/assets/179.heic',
'/assets/180.JPG',
'/assets/181.JPG',
'/assets/182.JPG',
'/assets/183.JPG',
'/assets/184.JPG',
'/assets/185.JPG',
'/assets/186.JPG',
'/assets/187.JPG'
]
let slideIndex = 0;

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
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}
showSlides();