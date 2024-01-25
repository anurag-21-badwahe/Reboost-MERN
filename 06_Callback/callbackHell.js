// Asynchronous functions with callbacks and arrow functions
const getUserData = (callback) => {
    setTimeout(() => {
        const user = { id: 1, name: 'Anurag' };
        callback(user);      
        console.log(callback);
    }, 1000);
};

const getComments = (userId, callback) => {
    setTimeout(() => {
        const comments = [{ id: 101, text: 'Great post!' }];
        callback(comments);
    }, 1000);
};

const getReplies = (commentId, callback) => {
    setTimeout(() => {
        const replies = [{ id: 201, text: 'Thanks!' }];
        callback(replies);
    }, 1000);
};

const getLikes = (callback,comments) => {
    setTimeout(() => {
        const likes = 50; // Assume 50 likes for demonstration
        callback();
    }, 1000);
};

// Callback Hell with arrow functions
getUserData(user => {
    getComments(user.id, comments => {
        getReplies(comments[0].id, replies => {
            getLikes(likes,comments => {
                console.log('User:', user);
                console.log('Comments:', comments);
                console.log('Replies:', replies);
                console.log('Likes:', likes);
                console.log(`${user.name} did ${comments.length} on this friend's post and got ${replies.length} replies and ${likes} likes`);
            });
        });
    });
});


// Callback Hell
// getUserData(function(user) {
//     getComments(user.id, function (comments) {
//         getReplies(comments[0].id, function (replies) {
//             console.log('User:', user);
//             console.log('Comments:', comments);
//             console.log('Replies:', replies);
//         });
//     });
// });

// Here in all fuction there is a function passed as a parameter with no name of function called anonymous function