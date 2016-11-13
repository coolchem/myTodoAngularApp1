

if(process.env.NODE_ENV === "production")
{
    //doing the production build here before deploying to heroku

    const exec = require('child_process').execSync;

    var util = require('./util');

    exec("NODE_ENV=build npm install");

    util.exec("npm run build-release",function(error){
        if(error)
        {
            console.log(error);
            process.exit(1)
        }
        else
        {
            process.exit(0);
        }
    })
}