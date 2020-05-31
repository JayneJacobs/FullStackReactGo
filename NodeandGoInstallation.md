# Node Installation

https://nodejs.org/en/

```sh
root@pr0con2:/var/www# wget https://nodejs.org/dist/v14.3.0/node-v14.3.0-linux-x64.tar.xz

root@pr0con2:/var/www# ls
html  node-v14.3.0-linux-x64.tar.xz  parcel_blueprint
root@pr0con2:/var/www# tar xf node-v14.3.0-linux-x64.tar.xz 
root@pr0con2:/var/www# ls
html  node-v14.3.0-linux-x64  node-v14.3.0-linux-x64.tar.xz  parcel_blueprint
root@pr0con2:/var/www# rm *.xz
root@pr0con2:/var/www# ls
html  node-v14.3.0-linux-x64  parcel_blueprint
```
 mv node-v14.3.0-linux-x64/ node/
ln -s /var/www/node/bin/node /usr/sbin/
ln -s /var/www/node/bin/npm /usr/sbin/