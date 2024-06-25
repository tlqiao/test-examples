const csvToJson = require('csvtojson');
async function readCsv() {
    const data = await csvToJson().fromFile('./testdata/data.csv');
    data.forEach(it => {
        if (it.role == "normal") {
            console.log(it.name);
            console.log(it.age)
        }
    });

    const rest = data.find(it => it.role == "manager");
    console.log(rest.name);
    console.log(rest.age);
}
readCsv();