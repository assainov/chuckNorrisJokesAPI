document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e){
    const number = document.getElementById('number').value;
    const list = document.querySelector('.jokes');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if (this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';
            if (jokes.type === 'success') {
                jokes.value.forEach(function(item) {
                    output += `<li>${item.joke}</li>`
                });
            } else {
                let li = document.createElement('li');
                    li.appendChild(document.createTextNode('Something went wrong'));
                    output = li;
            }
            list.innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}