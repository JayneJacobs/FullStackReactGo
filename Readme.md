# Server Setup

apt-get update
apt-get install nginx
cd /var/www
ls
rm -f html
rm -rf html
cd /etc/nginx
 ls
 cd sites-available
 ls
 rm -f default 
 cd ../sites-enabled
 ls
 rm -f default
 cd ../sites-available/
 touch pr0con2.jaynejacobs.com
service nginx stop
ln -s /etc/nginx/sites-available/pr0con2.jaynejacobs.com /etc/nginx/sites-enabled/
sudo apt install vim
   vi /etc/hosts

## Install Linode
 https://www.linode.com/docs/security/ssl/install-lets-encrypt-to-create-ssl-certificates/
sudo apt update && sudo apt upgrade
 mkdir  /var/www/parcel_blueprint/dist
 apt install git 
  git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt

cd /opt/letsencrypt

root@pr0con2:/opt/letsencrypt# sudo -H ./letsencrypt-auto certonly --standalone -d pr0con2.jaynejacobs.com
  nginx service status
  service nginx status

touch /var/www/parcel_blueprint/dist/index.html

## [Install Mongo](./MongoProcedure.md)
[mongo tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu)



from www.Pr0con.com

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

```json
db.createUser({
    user: "mongod",
    pwd: "SOMEHARDPASSWORD",
    roles: [
              { role: "userAdminAnyDatabase", db: "admin" },
              { role: "readWriteAnyDatabase", db: "admin" },
              { role: "dbAdminAnyDatabase", db: "admin"},
              { role: "clusterAdmin", db: "admin" }
           ]
})
```

```sh
sudo vi /etc/mongod.conf
```
```yaml
net:
  port: 27017
  bindIp: 127.0.0.1,yourip
security:
  authorization: enabled //spaces no tabs
```

```bash
sudo vi /lib/systemd/system/mongod.service
ExecStart=/usr/bin/mongod --auth --config /etc/mongod.conf
service mongod restart
service mongod status
```




## [Install MySQL](./MySQLProcedure.md)


apt-get install mysql-server
mysql_secure_installation
type> mysql
mysql>  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "MyqlPass!23";
browse to: https://www.phpmyadmin.net/   right click copy link location of download
cd /var/www/parcel_blueprint/dist/
wget https://files.phpmyadmin.net/phpMyAdmin/4.9.0.1/phpMyAdmin-4.9.0.1-all-languages.zip
unzip phpMyAdmin-4.9.0.1-all-languages.zip
rm phpMyAdmin-4.9.0.1-all-languages.zip
mv phpMyAdmin-4.9.0.1-all-languages/ phpmyadmin


## [Install php and npm](./NodeandGoInstallation.md)


