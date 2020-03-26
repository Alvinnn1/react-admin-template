FROM boky/nginx

RUN rm /etc/nginx/nginx.conf

ADD default.conf /etc/nginx/nginx.conf

COPY build/  /usr/share/nginx/html/
