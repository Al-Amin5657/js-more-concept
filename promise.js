const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num);
    if (num > 5) {
        resolve(6785868);
    }
    else {
        reject('No Data Available')
    }
})

getData
    .then(data => console.log(data));
// .catch (err => console.error(err))

