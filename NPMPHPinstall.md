find the node executable for linux systems @>  https://nodejs.org/en/download/
right click copy link location
cd /var/www/
type> wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
type> tar xf node-v10.16.3-linux-x64.tar.xz
type> mv node-v10.16.3-linux-x64 node
type> rm xf node-v10.16.3-linux-x64.tar.xz
type> ln -s /var/www/node/bin/node /usr/sbin
type> ln -s /var/www/node/bin/npm /usr/sbin
cd /var/www  
-just to be sure we are here

mkdir parcel_blueprint

-this can be whatever you want just make sure you keep the
the path in mind. i always use this for my frontend path.

cd /var/www/parcel_blueprint
npm init -y
npm install parcel-bundler --save
npm install --save @babel/core
npm install --save @babel/plugin-proposal-class-properties
npm install --save @babel/plugin-transform-runtime
npm install --save react react-dom

mkdir src

```cd /var/www/parcel_blueprint```

-OR src depending on what directory your in

touch index.html <-- in src directory
mkdir Components
mkdir fonts
mkdir css
cd /var/www/parcel_blueprint
touch .babelrc
-make sure you have the . in front of the filename

```sudo vi .babelrc```

type> i

- to insert
  
```{
	"plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-transform-runtime"]
}```

hit escape, then hold shift and hit :
type> wq
then enter  ,, to save
cd /var/www/parcel_blueprint

-just to be sure
sudo vi package.json
-replace the script part with below

```sh
  "scripts": {
    "start": "parcel src/index.html --host yourdomain.com --https --cert /etc/letsencrypt/live/yourdomain.com/cert.pem --key /etc/letsencrypt/live/yourdomain.com/privkey.pem --hmr-hostname yourdomain.com --hmr-port 5000 --no-autoinstall --no-source-maps",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
``

Now to finish we install pm2

```sh
cd /var/www/node
npm install pm2 -g
ln -s /var/www/node/bin/pm2 /usr/sbin
```
