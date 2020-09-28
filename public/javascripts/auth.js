document.addEventListener("DOMContentLoaded", function(event) {
    const URL = "http://localhost:3000/auth";


    const checkBox = document.getElementById("cb-register");
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            const div = document.createElement("div")
            div.className = "form-group";
            div.id = "password2";
            const input = document.createElement("input");
            input.className = "form-control";
            input.type = "password";
            input.name = "password2";
            input.placeholder = "retype password";
            div.append(input);
            document.getElementById("password1").after(div);
            const btn = document.getElementById("send-login");
            btn.textContent = "register";
        } else {
            document.getElementById("password2").remove();
            const btn = document.getElementById("send-login");
            btn.textContent = "login";
        }
    });

    const btn = document.getElementById("send-login");
    btn.addEventListener("click", function(event) {
        if (checkBox.checked) {
            const values = document.getElementsByClassName("form-control");
            const username = values[0].value;
            const password = values[1].value;
            const passwordRetype = values[2].value;
            if (username !== "" && password !== "" && passwordRetype) {
                if (password === passwordRetype) {
                    const data = { "username": username, "password": password, "passwordRetype": passwordRetype }
                    options = {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };
                    const res = fetch(URL, options)
                        .then(response => {
                        	console.log(response.status);
                        	return response.json();
                        })
                        .then(result => {
                        	console.log(result);
                        })
                        .catch((error) => {
                        	console.log(error);
                        });
                }
            }
        }
    });
});