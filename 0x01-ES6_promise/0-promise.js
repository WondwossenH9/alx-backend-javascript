function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Example showing how to resolve with a dummy response after a short delay
        setTimeout(() => {
            resolve({ data: 'Dummy response from API' });
        }, 1000);
    });
}

module.exports = {
    getResponseFromAPI
};
