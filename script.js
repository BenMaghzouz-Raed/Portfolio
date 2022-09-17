function sendMail(name, email, subject, message) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + btoa('ca27eefbb4f921cdec3dc34d6eae342d'+":" +'63e31e92ee3c2f7aae459930e1b9209f'));
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": email, "Name": name},
        "To": [{"Email": 'raed.maghzouz@gmail.com', "Name": 'Raed'}],
        "Subject": subject,
        "TextPart": message
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

function send(){
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    sendMail(name, email, 'Email From Portfolio', message);
}
