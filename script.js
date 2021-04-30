// Login Form Validation




function loginvalidate(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	if (username.value.trim() == "") {
		username.style.border = "solid 2px #b30000";
		document.getElementById("uname").innerHTML = "** Please Enter Username";
		return false;
	}

	else if (password.value.trim() == "") {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Please Enter Password";
		return false;
	}

	else{
		return true;
	}
}


function checkbox(){
	username.style.border = "solid 1px #33cc33";
	document.getElementById("uname").innerHTML = "";
	
	password.style.border = "solid 1px #33cc33";
	document.getElementById("pass").innerHTML = "";

}











// Sign Up Validation












function signupvalidate(){
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var emailid = document.getElementById("emailid");
	var age = document.getElementById("age");
	var password = document.getElementById("password");
	var cpassword = document.getElementById("cpassword");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



	if (firstname.value.trim() == "") {
		firstname.style.border = "solid 2px #b30000";
		document.getElementById("fname").innerHTML = "**Enter Firstname";
		return false;
	}

	else if (lastname.value.trim() == "") {
		lastname.style.border = "solid 2px #b30000";
		document.getElementById("lname").innerHTML = "** Enter Lastname";
		return false;
	}

	else if (emailid.value.trim() == "") {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Email Id";
		return false;
	}

	if (reg.test(emailid.value) == false) {
		emailid.style.border = "solid 2px #b30000";
		document.getElementById("eid").innerHTML = "** Enter Valid Email Id";
		return (false);
    }

	else if ((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false)) {
		document.getElementById("radio").innerHTML = "** Select Gender";
		return false;
	}

	else if (age.value.trim() == "") {
		age.style.border = "solid 2px #b30000";
		document.getElementById("agee").innerHTML = "** Enter Age";
		return false;
	}

	else if (age.value <= 0 ) {
		age.style.border = "solid 2px #b30000";
		document.getElementById("agee").innerHTML = "** Enter Valid Age";
		return false;
	}

	else if (password.value.trim() == "") {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Enter Password";
		return false;
	}

	else if (password.value.length <5) {
		password.style.border = "solid 2px #b30000";
		document.getElementById("pass").innerHTML = "** Enter Minimun 5 Letter Password";
		return false;
	}

	else if (cpassword.value.trim() == "") {
		cpassword.style.border = "solid 2px #b30000";
		document.getElementById("cpass").innerHTML = "** Enter Password Again";
		return false;
	}

	else if (!(cpassword.value == password.value)) {
		cpassword.style.border = "solid 2px #b30000";
		document.getElementById("cpass").innerHTML = "** Password Not Matching";
		return false;
	}

	else{
		return true;
	}
}


function checkbox2(){
	firstname.style.border = "solid 1px #33cc33";
		document.getElementById("fname").innerHTML = "";

	lastname.style.border = "solid 1px #33cc33";
		document.getElementById("lname").innerHTML = "";

	emailid.style.border = "solid 1px #33cc33";
		document.getElementById("eid").innerHTML = "";

	age.style.border = "solid 1px #33cc33";
		document.getElementById("agee").innerHTML = "";

	password.style.border = "solid 1px #33cc33";
		document.getElementById("pass").innerHTML = "";
	
	cpassword.style.border = "solid 1px #33cc33";
		document.getElementById("cpass").innerHTML = "";

	document.getElementById("radio").innerHTML = "";
}












// Kit Guides (Search bar)









let suggestions = [
    "Audio",
    "Computing",
    "KitchenAppliances",
    "SmartTechnology",
    "Smartphones",
    "Television",
    "Entertainment",
    "login",
    "signup",
    "fixit",
	"connectit",
	"kitguides",
	"improveit",

];







const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{	
            webLink = userData + ".html";
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = selectData + ".html";
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}