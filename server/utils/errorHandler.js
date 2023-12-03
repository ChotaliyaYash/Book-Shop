module.exports = (statuCode, message) => {
    const error = new Error(message);
    error.statuCode = statuCode;
    return error;
}