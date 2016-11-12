


if(process.env.NODE_ENV === "production")
{
    const exec = require('child_process').execSync;

/*    exec("ln -s /usr/local/heroku/bin/heroku /usr/bin/heroku");*/
    try {
        exec("/usr/bin/heroku config:set NPM_CONFIG_PRODUCTION=false");
    }
    catch (e){
        exec("/usr/local/heroku/bin/heroku config:set NPM_CONFIG_PRODUCTION=false");
    }


}