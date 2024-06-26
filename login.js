var user_name = JSON.parse(localStorage.getItem('user_names')) || [];
var user_name2 = JSON.parse(localStorage.getItem('user_names2')) || [];


// Function to save user_names array to LocalStorage
function saveUsernamesToLocalStorage() {
    localStorage.setItem('user_names', JSON.stringify(user_name));
    localStorage.setItem('usernam2', JSON.stringify(user_name2)) // in localstorage the key and value type storage
    // key name is usernam2 value is JSON.stringify(user_name2) HERE IT MUST BE IN json formate only 

    
}
//ganeshreddy6498@gmail.com
function reg_submit() {
    var reg_name = document.getElementById("reg_name").value;
    var reg_pass = document.getElementById("reg_pass").value;
    var reg_re_pass = document.getElementById("reg_re_pass").value;

    // Retrieve usernames from localStorage
    var storedUsernames = localStorage.getItem('usernam2');
    if (storedUsernames) {
        user_name2 = JSON.parse(storedUsernames);
    }

    // Clear error messages
    var error_name = document.getElementById("error_name");
    var error_pass = document.getElementById("error_pass");
    var error_empty_name = document.getElementById("error_empty_name");
    error_name.style.visibility = "hidden";
    error_pass.style.visibility = "hidden";
    error_empty_name.style.visibility = "hidden";

    // Check if username is not empty
    if (!reg_name) {
        error_empty_name.style.visibility = "visible";
        return;
    }

    // Check if username is already taken
    if (user_name2.includes(reg_name)) {
        error_name.style.visibility = "visible";
        return;
    }

    // Check if passwords match
    if (reg_pass !== reg_re_pass) {
        error_pass.style.visibility = "visible";
        return;
    }

    // Add new user
    user_name2.push(reg_name);
    user_name.push({
        'username': reg_name,
        'password': reg_pass
    });

    // Move elements
    var x = document.getElementById("login-form");
    var y = document.getElementById("reg-form");
    var z = document.getElementById("button-colour");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

    console.log("Usernames:", user_name);
    console.log("New user details:", user_name2);

    saveUsernamesToLocalStorage();
}
function log1() {
    var x = document.getElementById("login-form");
    var y = document.getElementById("reg-form");
    var z = document.getElementById("button-colour");
    var input_login_name = document.getElementById("log_user")
    var input_login_pass = document.getElementById("log_pass")
    var login_name_err = document.getElementById("log_name_error")
    var login_pass_err = document.getElementById("log_pass_error")
    input_login_name.value = ""
    input_login_pass.value = ""

    login_name_err.style.visibility = "hidden"
    login_pass_err.style.visibility = "hidden"
   
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function login() {
    var log_name = document.getElementById("log_user").value;
    var log_pass = document.getElementById("log_pass").value;
    var loggedIn = false;

    // Retrieve user data from localStorage here user_name is key in thar l
    var user_name = JSON.parse(localStorage.getItem("user_names")) || [];

    // Reset error messages visibility
    var error_pass = document.getElementById("log_pass_error");
    error_pass.style.visibility = "hidden";

    var error_name = document.getElementById("log_name_error");
    error_name.style.visibility = "hidden";

    // Check credentials against registered users
    for (var i = 0; i < user_name.length; i++) {
        if (user_name[i].username === log_name && user_name[i].password !== log_pass) {
            error_pass.style.visibility = "visible";
            return; // Stop further execution
        } else if (user_name[i].username === log_name && user_name[i].password === log_pass) {
            loggedIn = true;
            error_pass.style.visibility = "hidden";
             var x=user_name[i].username
            break;
        }
    }

    // Display success message if logged in
    if (loggedIn) {
        var log = document.getElementById("login");
        var log_mess = document.getElementById("messagelog");
        var screen1=screen.width
        log.style.display = "none";
        log_mess.style.display = "block";

        setTimeout(function () {
            log_mess.style.display = "none"
           
        }, 2000);
        var username_profile = document.getElementById("username_profile")//to disanle the img of profile
        username_profile.style.display = "none"
        var username_log = document.getElementById("username_log");
        var username_name = document.getElementById("username_name");
        var icon_div = document.getElementById("icon")// it the div of log in log out
        
        var memu1 = document.getElementById("menu1")// it is div of seeds bags etc
        
        memu1.classList.toggle('expand1');// toggle to get animation width increase and decrease 
        if (screen1 <= 412) {
            icon_div.style.width = "270px"
            memu1.style.left="30%"
           
           // toggle i predefine

            console.log("hello")
        }
        else {
            icon_div.style.width = "28%"
            icon_div.classList.toggle('expand2')// toggle i predefine
            console.log("hello1")
        } 
       
        
        username_log.innerHTML = x[0].toUpperCase()
    
        username_name.innerHTML = x[0].toUpperCase() + x.slice(1)
        
        var logout_img = document.getElementById("logout_img")
        // to display cart img we have taken that id
        var cart_log = document.getElementById("cart_log15")
        cart_log.style.display = "block"

        username_log.style.display="block"
        username_name.style.display = "block"
        
        
        
        logout_img.style.display="block"

    } else {
        error_name.style.visibility = "visible";
    } 
    
}


function reg1() {
    var x = document.getElementById("login-form");
    var y = document.getElementById("reg-form");
    var z = document.getElementById("button-colour");
    var reg_input_name = document.getElementById("reg_name")
    var reg_input_pass = document.getElementById("reg_pass")
    var reg_input_repass = document.getElementById("reg_re_pass")
    var reg_name_error = document.getElementById("error_name")
    var reg_pass_erro = document.getElementById("error_pass")
    //ganeshreddy6498@gmail.com
    reg_input_name.value = ""
    reg_input_pass.value = ""
    reg_input_repass.value = ""
    reg_name_error.style.visibility="hidden"
    reg_pass_erro.style.visibility = "hidden"


    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
//ganeshreddy6498@gmail.com
function submit1() {

    var x = document.getElementById("login-form");
    var y = document.getElementById("reg-form");
    var z = document.getElementById("button-colour");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
// to open the login and register function
function openloginwindow() {
    var x = document.getElementById("login")
    x.style.display = "block"
    var input_login_name = document.getElementById("log_user")
    var input_login_pass = document.getElementById("log_pass")
    var login_name_err = document.getElementById("log_name_error")
    var login_pass_err = document.getElementById("log_pass_error")
    input_login_name.value = ""
    input_login_pass.value = ""
    login_name_err.style.display = "hidden"
    login_pass_err.style.display="hidden"
    
}
function logout() {
    var screen1 = screen.width
    if (screen1 <= 412) {
        var menu1 = document.getElementById("menu1")
        menu1.style.left = "80%"

    }
   
    
    var username_profile = document.getElementById("username_profile")
    username_profile.style.display = "block"
    var username_log = document.getElementById("username_log");
    username_log.innerHTML = ""
    username_log.style.display = "none"
    var username_name = document.getElementById("username_name");
    username_name.innerHTML = ""

    username_name.style.display = "none"
    var logout_img = document.getElementById("logout_img")

    
    var cart_log = document.getElementById("cart_log15")
    cart_log.style.display = "none"
    var cart = document.getElementById("cart")
    logout_img.style.display = "none"
    var icon_div = document.getElementById("icon")
    icon_div.style.width = "20%"
    var indoor = document.getElementById("Indoor-seeds")
    var seed = document.getElementById("seed")
    seed.style.display="none"
    cart.innerHTML = ""
    cart.style.display = "none"
    indoor.style.width = "100%"
    
    
    

    



}

function close() {
    var x= document.getElementById("cart")
}