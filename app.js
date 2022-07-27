let url = `http://api.icndb.com/jokes/random/${number}`;
document.querySelector(".get-jokes").addEventListener("click", getJokes);



function getJokes(e) {
    let number = document.querySelector('input').value;
    e.preventDefault();
    xhr = new XMLHttpRequest();
    // open
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    // onload
    xhr.onload = function() {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText)
            console.log(response)

            let output = "";

            if (response.type === "success") {
                response.value.forEach(function(joke) {
                    output += `
                    <li>${joke.joke}</li>`
                });
            } else {
                output += `<li>SOMETHING WENT WRONG</li>`
            }
            document.querySelector(".jokes").innerHTML = output
        }
    }
    // send
    xhr.send()
}