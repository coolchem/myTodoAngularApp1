


if(process.env.NODE_ENV === "production")
{
    const exec = require('child_process').execSync;

    exec("heroku config:set NPM_CONFIG_PRODUCTION=false");
}