

```mysql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "SOMEHARDPASSWORD!23";
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "MyqlPass!23";
Query OK, 0 rows affected (0.00 sec)
```

```bash
cd /var/www/parcel_blueprint/dist/
wget https://files.phpmyadmin.net/phpMyAdmin/5.0.2yAdmin-5.0.2-all-languages.zip
ls
unzip phpMyAdmin-5.0.2-all-languages.zip 
apt install unzip
history
/var/www/parcel_blueprint/dist# 
 unzip phpMyAdmin-5.0.2-all-languages.zip   
 rm -f  phpMyAdmin-5.0.2-all-languages.zip

```

 mv phpMyAdmin-5.0.2-all-languages phpmyadmin

Move to install nginx and php to make this work

apt install php curl php-cli php-mbstring git unzip php-fpm php-zip php-xml php-mysqlnd

cd /var/run/php
root@pr0con2:/var/run/php# ls
php7.2-fpm.pid  php7.2-fpm.sock


add the right version to [nginx file](etc/nginx/sites-available/pr0con2.jaynejacobs.com)

ls
php7.2-fpm.pid  php7.2-fpm.sock
root@pr0con2:/var/run/php# nginx -t

restart nginx
Now this works 

https://pr0con2.jaynejacobs.com/phpmyadmin/

