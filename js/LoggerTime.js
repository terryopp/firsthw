function LoggerTime () {
    this.log = (text) => {
        let now = new Date();
        let time = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()},${now.getMilliseconds()}`;
        console.log(`${time} - ${text}`);
    }
}