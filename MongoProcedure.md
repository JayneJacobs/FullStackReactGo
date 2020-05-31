
# Mongo  Procedure
cd /var/www
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.dodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
apt install net-tools

Add to /etc/mongod.conf
vi /etc/mongod.conf
# network interfaces
net:
  port: 27017
  bindIp: 74.208.87.29,127.0.0.1

```s
 service mongod start
root@pr0con2:/var/www# mongo


---

> use admin
switched to db admin
> db.createUser({
...     user: "mongod",
...     pwd: "SOMEHARDPASSWORD",
...     roles: [
...               { role: "userAdminAnyDatabase", db: "admin" },
...               { role: "readWriteAnyDatabase", db: "admin" },
...               { role: "dbAdminAnyDatabase", db: "admin"},
...               { role: "clusterAdmin", db: "admin" }
...            ]
... })
Successfully added user: {
        "user" : "mongod",
        "roles" : [
                {
                        "role" : "userAdminAnyDatabase",
                        "db" : "admin"
                },
                {
                        "role" : "readWriteAnyDatabase",
                        "db" : "admin"
                },
                {
                        "role" : "dbAdminAnyDatabase",
                        "db" : "admin"
                },
                {
                        "role" : "clusterAdmin",
                        "db" : "admin"
                }
        ]
}
```
```s
sudo vi /lib/systemd/system/mongod.service
```
Add the --auth
ExecStart=/usr/bin/mongod --auth --config /etc/mongod.conf
```s
service mongod restart
service mongod status
Warning: The unit file, source configuration file or drop-ins of mongod.service changed on disk. Run 'systemctl daemon-reload' to reload units.
root@pr0con2:/var/www# systemctl daemon-reload
```
