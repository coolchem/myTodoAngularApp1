


if(process.env.NODE_ENV === "production")
{
    const exec = require('child_process').execSync;

    exec("sudo ln -s /usr/local/heroku/bin/heroku /usr/bin/heroku");
    exec("heroku config:set NPM_CONFIG_PRODUCTION=false");
}