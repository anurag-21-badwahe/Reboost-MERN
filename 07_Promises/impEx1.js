const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { id: 1, name: 'Anurag' };
            resolve(user);
        }, 1000);
    });
};

const getComments = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const comments = { id: 101, text: 'Great post!' };
            resolve(comments);
        }, 1000);
    });
};

const getReplies = (commentId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const replies = { id: 201, text: 'Thanks!' };
            resolve(replies);
        }, 1000);
    });
};

const getLikes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const likes = 200;
            resolve(likes);
        }, 1000);
    });
};


getUserData()
    .then((user) => getComments(user.id))
    .then((comments) => getReplies(comments.id))
    .then((replies) => getLikes(replies.text))
    .then(({ user, comments, replies, likes }) => {
        console.log('User:', user);
        console.log('Comments:', comments);
        console.log('Replies:', replies);
        console.log('Likes:', likes);
        console.log(`${user.name} did ${comments.text} on this friend's post and got ${replies.text} replies and ${likes} likes`);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
