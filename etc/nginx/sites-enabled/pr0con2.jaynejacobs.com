server {
    listen 80;
    listen [::]:80;
    server_name pr0con2.jaynejacobs.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name pr0con2.jaynejacobs.com;
    
    add_header Cache-Control no-cache;
    
    ssl_certificate /etc/letsencrypt/live/pr0con2.jaynejacobs.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pr0con2.jaynejacobs.com/privkey.pem;
    root /var/www/parcel_blueprint/dist;
    index index.php index.html index.htm;
    
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
    }
    location ~ /\.ht {
    	deny all;
    }
}

