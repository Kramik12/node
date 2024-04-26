
// const http = require("http");
// http.createServer();
// const path = require("path");

const fs = require("fs");

let fileName = "user.json";
//text data 
let user = {
    name: "Kramik",
    email: "kramikkafle7@gmail.com",
    address: "Sunsari"
};

user = JSON.stringify(user);

fs.open("file/"+fileName, 'w', (err, fp) => {
    if(err) {
        console.log("Error while opening file.");
    } else {
        fs.writeFile("file/"+fileName, user, (error, success) => {
            if(error) {
                console.log("Error in file");
            } else {
                console.log("Data was stored in the file");
            }
        })
    }
} )

fs.open("file/"+fileName, 'r', (err, fp) => {
    if(err) {
        console.log("Error while opening file.");
    } else {
        fs.readFile("file/"+fileName, {encoding: "utf-8"}, (error, data) => {
            if(error) {
                console.log("Error while reading data");
            } else {
                console.log("Data: ", data);
            }
        })
    }
} )