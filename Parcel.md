# Setup Procedure

A framwe work similar to 
https://webpack.js.org/ 

https://parceljs.org/

## Babel

https://babeljs.io/

cd /var/www/parcel_blueprint
npm init -y
npm install parcel-bundler --save
npm install --save @babel/core

npm install --save plugin-proposal-class-properties
npm install --save @babel/plugin-transform-runtime 
npm install --save react react-dom
npm install parcel-bundler --save
cd /var/www/parcel_blueprint 
touch .babelrc
sudo vi .b abelrc				
mkdir src
cd /var/www/parcel_blueprint   
	-OR src depending on what directory your in	
				
touch index.html <-- in src directory

	-make sure you have the . in front of the filename


Wrote to /root/package.json:

```

{
  "name": "root",
  "version": "1.0.0",
  "description": "",
  "main": ".mongorc.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```	

mkdir Components
mkdir fonts
mkdir css

type> i 
	- to insert
{
	"plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-transform-runtime"]
}
hit escape, then hold shift and hit : 
type> wq
then enter  ,, to save
cd /var/www/parcel_blueprint 
	-just to be sure
sudo vi package.json
	-replace the script part with below
	
  "scripts": {
    "start": "parcel src/index.html --host yourdomain.com --https --cert /etc/letsencrypt/live/yourdomain.com/cert.pem --key /etc/letsencrypt/live/yourdomain.com/privkey.pem --hmr-hostname yourdomain.com --hmr-port 5000 --no-autoinstall --no-source-maps",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
Now to finish we install pm2
cd /var/www/node
npm install pm2 -g
ln -s /var/www/node/bin/pm2 /usr/sbin