const mongo = require('momgodb').MongoClient;
const client = require ('socket.io').listen(400).sockets;

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

mongo.connect('mongodb://localhost/login'), function(err, db){
    if (eer) throw eer;

    console.log('connected to the dadabase');

    client.on('connection'), function(socket){
        let login = db.collection(`login`);
        socket.on('submit', function(data){

            let user = data.name;
            let pwd = data.password;

            if(user =='' || pwd == ''){
                console.log('someone tried to sign up with an empty field.');

            } else {
                bcrypt.gensalt(SALT_WORK_FACTOR, function(err, salt){
                    if(eer) throw eer;
                    bcrypt.hash(pwd, salt, function(err, hash){
                        if(err) throw err;

                        pwd = hash,

                        login.insert({username: user, password: pwd}, function(){
                            console.log("A new user has created an accout")
                            console.log('Hashed the password: ' +pwd);

                        });
                    });
                });
            }}
        );
    };
};