
const formElement = document.querySelector('.comment');
console.log(formElement);
const test = document.querySelector('#name');
console.log(test);


formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#eMail');
    const inputComment = document.querySelector('#comment');

    const commentHTML = ` <div class="blogContainer">
                        <img src="assets/comment-1.jpg" alt="commenter's profile">
                        <div class="blogContainer2">
                        <p>Tuesday October 9th, 2018 by ${inputName.value}</p>
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