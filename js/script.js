const userInfo = {
    usn: "CutiePie",
    pw: "24122023",
    usn: "cutiepie"
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
            let loginPage = document.getElementsById("loginPage");
            if(loginPage){
                loginPage.style.display="none";
            }

           let home = document.getElementsById("homepage");

           if(home) {
            home.style.display="block";
           }
        }

        }

        document.getElementById("answer1").addEventListener("keydown", function(event){
            if(event.key === "Enter") {
                event.preventDefault();
                document.getElementById("answerBtn").click();
            }
        });
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
        
    
