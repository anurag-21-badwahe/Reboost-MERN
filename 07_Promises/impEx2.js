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
    .then((user) => {
        console.log('User:', user);
        return getComments(user.id)
            .then((comments) => {
                console.log('Comments:', comments);
                return getReplies(comments.id)
                    .then((replies) => {
                        console.log('Replies:', replies);
                        return getLikes()
                            .then((likes) => {
                                console.log('Likes:', likes);
                                return { user, comments, replies, likes };
                            });
                    });
            });
            
    })
    .catch((error) => {
        console.error('Error:', error);
    });
