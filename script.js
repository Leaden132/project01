
// const formElement = document.querySelector('.comment');
// console.log(formElement);
// const test = document.querySelector('#name');
// console.log(test);

const app = {};

app.init = function () {

    const formElement = document.querySelector('.comment');
    formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    app.addComment(app.dateConvert());
    });
}


//grabbing date in mm/dd/yyyy form
app.dateConvert = () => {
    let time = new Date();
    let dd = String(time.getDate()).padStart(2, '0');
    let mm = String(time.getMonth() + 1).padStart(2, '0');
    let yyyy = time.getFullYear();
    time = mm + '/' + dd + '/' + yyyy;
    return time;
}


//appending comments on the blog comment section
app.addComment = (query) => {

        const inputName = document.querySelector('#name');
        const inputEmail = document.querySelector('#eMail');
        const inputComment = document.querySelector('#comment');

        const commentHTML = ` <div class="blogContainer">
                        <img src="assets/comment-1.jpg" alt="commenter's profile">
                        <div class="blogContainer2">
                        <p>${query} by ${inputName.value}</p>
                        <p>${inputComment.value}</p>
                        </div>
                    </div>`;

        const commentElement = document.querySelector('.additionalPost');
        const comment = document.createElement('div');
        comment.innerHTML = commentHTML;

        commentElement.appendChild(comment);

        inputName.value = '';
        inputEmail.value = '';
        inputComment.value = '';
    }

app.init();