alert("Enjoy my galaxy!!")

// Moving star
const movingImage = document.getElementById("moving-image");

function moveImage(timestamp) {
    const animationDuration = 3000; // Animation duration in milliseconds

    const progress = (timestamp - startTime) / animationDuration;

    const maxXPosition = window.innerWidth - movingImage.width;
    const maxYPosition = window.innerHeight - movingImage.height;

    const newXPosition = maxXPosition * Math.cos(progress * 2 * Math.PI) + maxXPosition;
    const newYPosition = maxYPosition * Math.sin(progress * 2 * Math.PI) + maxYPosition;

    movingImage.style.left = newXPosition + "px";
    movingImage.style.top = newYPosition + "px";

    if (progress < 1) {
        requestAnimationFrame(moveImage);
    }
}

let startTime;
function startAnimation() {
    startTime = performance.now();
    moveImage(startTime);
}

startAnimation();

// Comment section
// Function to display comments from localStorage
function displayComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const comment = localStorage.getItem(key);

        const commentBox = document.createElement('div');
        commentBox.classList.add('comment-box');

        const commentElement = document.createElement('div');
        commentElement.textContent = comment;

        // Add a delete button to each comment
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteComment(key));

        commentBox.appendChild(commentElement);
        commentBox.appendChild(deleteButton);

        commentsDiv.appendChild(commentBox);
    }
}

// Function to add a new comment to localStorage
function addComment() {
    const commentText = document.getElementById('comment-text').value;

    if (commentText) {
        const timestamp = Date.now();
        localStorage.setItem(timestamp, commentText);

        // Clear the input field
        document.getElementById('comment-text').value = '';

        // Display the updated comments
        displayComments();
    }
}

// Function to delete a comment from localStorage
function deleteComment(key) {
    localStorage.removeItem(key);
    displayComments();
}

// Event listener for submitting a comment
document.getElementById('submit-comment').addEventListener('click', addComment);

// Initial display of comments
displayComments();
// Function to add event listeners for paragraph highlighting
function addParagraphHighlightListeners() {
    const paragraphContainers = document.querySelectorAll('.paragraph-container');

    paragraphContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
            const highlightBox = container.querySelector('.highlight-box');
            highlightBox.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            const highlightBox = container.querySelector('.highlight-box');
            highlightBox.style.display = 'none';
        });
    });
}

// Call the function to add event listeners for paragraph highlighting
addParagraphHighlightListeners();

