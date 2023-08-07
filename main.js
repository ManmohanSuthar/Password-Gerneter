const showPassword = document.getElementById("password")
const lenth = 16;


const capitalize =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890"
const spesal = "`~!@#$%^&*()_-+={}[]|\:;'";
const allkey = capitalize + lowercase + num + spesal;

function passwordGn() {
    let password = "";
    password += capitalize[Math.floor(Math.random()*capitalize.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += num[Math.floor(Math.random()*num.length)]
    password += spesal[Math.floor(Math.random()*spesal.length)]

    while (lenth > password.length) {
    password += allkey[Math.floor(Math.random()*allkey.length)]
    }

    showPassword.value = password;

}

function copyPssword() {
    showPassword.select();
    document.execCommand("copy");
}


