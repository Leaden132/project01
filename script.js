
const formElement = document.querySelector('.comment');
console.log(formElement);
const test = document.querySelector('#name');
console.log(test);


let time = new Date();
console.log(time);
let dd = String(time.getDate()).padStart(2, '0');
let mm = String(time.getMonth() + 1).padStart(2, '0'); 
let yyyy = time.getFullYear();

time = mm + '/' + dd + '/' + yyyy;
console.log(time);


formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#eMail');
    const inputComment = document.querySelector('#comment');

    const commentHTML = ` <div class="blogContainer">
                        <img src="assets/comment-1.jpg" alt="commenter's profile">
                        <div class="blogContainer2">
                        <p>${time} by ${inputName.value}</p>
                        <p>${inputComment.value}</p>
                        </div>
                    </div>`;

    const commentElement = document.querySelector('.additionalPost');
    const comment = document.createElement('div');
    comment.innerHTML = commentHTML;

    commentElement.appendChild(comment);

    inputName.value = '';
    inputEmail.value ='';
    inputComment.value ='';
});