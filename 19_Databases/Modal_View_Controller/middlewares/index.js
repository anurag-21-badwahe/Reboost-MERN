const myMiddleware = (msg) => {
  return (req, res, next) => {
    console.log(msg);
    next();
  };
};

module.exports = {
  myMiddleware,
};
