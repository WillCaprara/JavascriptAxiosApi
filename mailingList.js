const mailingListForm = document.getElementById('mailingListForm');

mailingListForm.addEventListener('submit', function(e){
    e.preventDefault();

    var lastName = document.getElementById('txtLastName');
    var firstName = document.getElementById('txtFirstName');
    var email = document.getElementById('txtEmail');

    var data = { 'lastName': lastName.value, 'firstName': firstName.value, 'email': email.value };

    axios.post('http://localhost:63792/api/mailinglist/v1', data, {
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        if(response.data == 'There is already a record with the same data.'){
            var addErrorMessage = document.getElementById('divAddErrorMessage');
            addErrorMessage.innerHTML = response.data;
        }
        else {
            lastName.value = '';
            firstName.value = '';
            email.value = '';

            location.href = 'Confirmation.html';
        }
    }).catch(error => { console.error(error) });
});