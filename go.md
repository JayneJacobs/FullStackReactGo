# Installing Go

https://golang.org/dl/

```sh
cd /var/www/

wget https://dl.google.com/go/go1.13.7.linux-amd64.tar.gz

tar -xf go1.13.7.linux-amd64.tar.gz

ln -s /var/www/go/bin/go /usr/sbin
```



root@pr0con2:/var/www/go_systems# touch ~/.bash_profile
root@pr0con2:/var/www/go_systems# source  ~/.bash_profile



build [go program](parcel_blueprint/dist/gws.go)
go guild gws.go
./gws

chmod +x gws



go get github.com/gorilla/mux
go get github.com/websocket

go run .

netstat -l

 netstat -l | grep 1200