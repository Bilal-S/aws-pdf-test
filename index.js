"use strict";

const fs = require("fs");

let myevent = {
    Records: [
        {
            EventSource: "aws:sns",
            EventVersion: "1.0",
            EventSubscriptionArn: "arn:aws:sns:eu-west-1:259963572854:beta-run-medium:92cf6c39-712c-404c-97ad-e8ff7a91b2b2",
            Sns: {
                Type: "Notification",
                MessageId: "e1d5e606-5dc2-5d1b-b215-b2297f6ca424",
                TopicArn: "arn:aws:sns:eu-west-1:259963572854:beta-run-medium",
                Subject: "block4-safe-container",
                Message: "{\"userUuid\":\"d5ce780c-efe3-4f3d-bc69-38fb9045829f\",\"transactionKey\":\"5433ce22-7ee1-4a60-8955-1638e539277a\",\"dataFileUrl\":\"https://xbeta-pro-eu1.s3.eu-west-1.amazonaws.com/d5ce780c-efe3-4f3d-bc69-38fb9045829f/5433ce22-7ee1-4a60-8955-1638e539277a/tracker.xbee?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATZBYJKJ3ONAE2KR4%2F20181003%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181003T200254Z&X-Amz-Expires=900&X-Amz-Security-Token=FQoGZXIvYXdzEA0aDEzdfkDwJffLTofGeCLwATaiUm9DMQkyMrgWYSdUK9Sn0RKYTi9a4OyJkrCA1i7ynZdeBy9diZzYBKOX55Bz0a3kRn2%2BBdq5bRsmB8rCEqBpgdqa2xr5T%2BK6XiUwp8p1mtUQrkM4aCGCQpjN%2FnFkqBohofRmJfgr71kf6RHsHjvME9D9oWXrU9EfjySm5TgBKYfKHNYjZXbCbWD7CkJnp7SV6nNK3llwaUFVkw%2Bzqhab2IiS0CYT8AHNtSfMrw2Uz8k%2BBmVfc1j7qaQ0HBbxB19nY7D%2FmjUiL6oNPewk76QLBGvtCCpykd3yUj2av%2F5waLZX%2Fqucdpji%2BsU%2FTwimQiiCptTdBQ%3D%3D&X-Amz-Signature=d255e127e320178d356f484be400a72b19e7a4eb12c8e2382ba6be05f51aaf6c&X-Amz-SignedHeaders=host\",\"userProcessingDataFileUrl\":\"https://xbeta-pro-eu1.s3.eu-west-1.amazonaws.com/d5ce780c-efe3-4f3d-bc69-38fb9045829f/5433ce22-7ee1-4a60-8955-1638e539277a/user-processing-datafile_tracker.xbee_0_e0dd7256-8dbf-4fd6-82f1-104e8cbe2172.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATZBYJKJ3ONAE2KR4%2F20181003%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181003T200254Z&X-Amz-Expires=900&X-Amz-Security-Token=FQoGZXIvYXdzEA0aDEzdfkDwJffLTofGeCLwATaiUm9DMQkyMrgWYSdUK9Sn0RKYTi9a4OyJkrCA1i7ynZdeBy9diZzYBKOX55Bz0a3kRn2%2BBdq5bRsmB8rCEqBpgdqa2xr5T%2BK6XiUwp8p1mtUQrkM4aCGCQpjN%2FnFkqBohofRmJfgr71kf6RHsHjvME9D9oWXrU9EfjySm5TgBKYfKHNYjZXbCbWD7CkJnp7SV6nNK3llwaUFVkw%2Bzqhab2IiS0CYT8AHNtSfMrw2Uz8k%2BBmVfc1j7qaQ0HBbxB19nY7D%2FmjUiL6oNPewk76QLBGvtCCpykd3yUj2av%2F5waLZX%2Fqucdpji%2BsU%2FTwimQiiCptTdBQ%3D%3D&X-Amz-Signature=3634a8908d2b3698b764868e604f58efedb02129b7a19297d77cdab89ba31c1f&X-Amz-SignedHeaders=host\",\"outputFileUrl\":\"https://xbeta-pro-eu1.s3.eu-west-1.amazonaws.com/d5ce780c-efe3-4f3d-bc69-38fb9045829f/5433ce22-7ee1-4a60-8955-1638e539277a/tracker.xbee_0_e0dd7256-8dbf-4fd6-82f1-104e8cbe2172.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATZBYJKJ3ONAE2KR4%2F20181003%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181003T200254Z&X-Amz-Expires=900&X-Amz-Security-Token=FQoGZXIvYXdzEA0aDEzdfkDwJffLTofGeCLwATaiUm9DMQkyMrgWYSdUK9Sn0RKYTi9a4OyJkrCA1i7ynZdeBy9diZzYBKOX55Bz0a3kRn2%2BBdq5bRsmB8rCEqBpgdqa2xr5T%2BK6XiUwp8p1mtUQrkM4aCGCQpjN%2FnFkqBohofRmJfgr71kf6RHsHjvME9D9oWXrU9EfjySm5TgBKYfKHNYjZXbCbWD7CkJnp7SV6nNK3llwaUFVkw%2Bzqhab2IiS0CYT8AHNtSfMrw2Uz8k%2BBmVfc1j7qaQ0HBbxB19nY7D%2FmjUiL6oNPewk76QLBGvtCCpykd3yUj2av%2F5waLZX%2Fqucdpji%2BsU%2FTwimQiiCptTdBQ%3D%3D&X-Amz-Signature=f40cd20cf18031f44c4438eb54f110efef9de9a836d4810977aa437b671d4802&X-Amz-SignedHeaders=host\",\"filename\":\"tracker.xbee\",\"fromIp\":\"54.229.64.109\"}",
                Timestamp: "2018-10-03T20:02:54.658Z",
                SignatureVersion: "1",
                Signature: "ofa0qDNNuE4yXjtsEfHsJu0YftzqvQk3zybmX7YqeE+a0y1lOxzcCbZKSvxOwW3RsfYARjkFz4fuami/aCE960BlYkqy/iT5ZCiT2tKPARdzuflBa4cQELQvws7AKbrHuhjXnbaOT4wdCEMku1VAwpUU972YDoDumuKr+AmuHiID6DkQTv7jpIEp8BemyG4C6OxHlEuX3X1RXTQNLJ9tJUNPdgfFHGY0ra3hpB58lR60cnIcfq7IB+nG5+I9QfUhexoQw0s8qKcfPoqowfCfRkhq21ZPyJA9Cgsc4b9dOBGwWpct//T60rgLU2dgyzSFOnZWW3CTxc73/1BtkezO5Q==",
                SigningCertUrl: "https://sns.eu-west-1.amazonaws.com/SimpleNotificationService-ac565b8b1a6c5d002d285f9598aa1d9b.pem",
                UnsubscribeUrl: "https://sns.eu-west-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-west-1:259963572854:beta-run-medium:92cf6c39-712c-404c-97ad-e8ff7a91b2b2",
                MessageAttributes: {}
            }
        }
    ]
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const mydata = {
    parameters: {
        message : lorem,
        use_qr_code: false        
    },
    integrations: {
        recipients:[{timezone:"America/New_York",xcoobee_id:"~ringo-star",name:"blah furg", last_name:"furgerson",locale:"en-us"}],
        transaction: {
            id: "aabbbcc"
        }
    },
    user_data:{
        xcoobee_id:"~jodaking",
        first_name:"brian",
        last_name:"sonny"
    }
}

let outFile = "/temp/testout.pdf";

//if we are running on lambda set the temp dir like so
if (process.env.AWS_REGION) {
    outFile = "/tmp/testout.pdf";
}

const myservices = {
    writeStreamManager: {
        getWriteStream() {
            const stream = fs.createWriteStream(outFile);
            const streamContainer = {
                stream,
                ended: false,
            };

            stream.on("finish", () => {
                console.log("stream ended gws");
                streamContainer.ended = true;
            });
        
            return stream;        
        }
    },
    log(message,type, replacement) {
        console.log(type, " => ", message);
    }
}


async function beefunction(event, context, callback) {

    let beemodule = require("bee-simple-message");
    beemodule.flight(myservices, mydata, callback);

}    



exports.handler = beefunction;


if (!module.parent) {
    const localCallback = function myCallback(error, success) {
        if (success) {
            console.log("MOCK CB SUCCESS: ", success);
        } else {
            console.log("MOCK CB ERR: ", error);
        }
    };

    // invoke
    beefunction(myevent,{},localCallback);
}