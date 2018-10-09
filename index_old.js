"use strict";

const PDFDocument = require("pdfkit");
const fs = require("fs");

let outFile = "/temp/testout.pdf";

//if we are running on lambda set the temp dir like so
if (process.env.AWS_REGION) {
    outFile = "/tmp/testout.pdf";
}

function pdffunction(event, context, callback) {   
    
    console.log("starting on node ", process.version);

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const document = new PDFDocument({
        info: {
            Title: "Test Memo",
            Author: "Jerome Winter",
            Subject: "Certainty is Elusive",
        },
    });

    // establish output target
    const writeStream = fs.createWriteStream(outFile);
    const stream = document.pipe(writeStream);

    // set stream events
    stream.on("error", (error) => {
        console.log("Stream Error:");
        return callback(error.message);
    });

    stream.on("finish", () => {
        console.log("Stream Success:");
        return callback(null, true);
    });
    
    stream.on("pipe", (src) => {
        console.log("something is piping into the writer");
    });    

    // write something to PDF

    document.fontSize(15);
    document.lineWidth(1)
    .strokeColor("black")
    .moveTo(210, 92)
    .lineTo(540, 92)
    .stroke();    
    
    document.moveDown();
    document.fillColor("black")
    .text(lorem, {
        width: 468        
    });    
    
    document.end();

 }; 

exports.handler = pdffunction;


// run test code if we are not invoked by aws
if (!module.parent) {
    const localCallback = function myCallback(success, error) {
        if (success) {
            console.log("MOCK CB SUCCESS: ", success);
        } else {
            console.log("MOCK CB ERR: ", error);
        }
    };

    // invoke
    pdffunction({},{},localCallback);
}