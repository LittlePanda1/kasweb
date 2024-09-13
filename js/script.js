const userInfo = {
    usn: "CutiePie",
    pw: "24122023",
    usn: "cutiepie"
}
const ans1 = ["Gultik","Blok M", "Gultik Blok M","gultik","blok m","gultik blok m"];

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
            let loginPage = document.getElementsByClassName("login-page")[0];
            if(loginPage){
                loginPage.style.display="none";
            }

           let home = document.getElementsByClassName("home")[0];

           if(home) {
            home.style.display="block";
           }
        }

    document.getElementById("answer1").addEventListener("keydown", function(event){
        if(event.key === "Enter") {
            event.preventDefault();
            document.getElementById("answerBtn").click();
        }
    });
        }
        
    
