# http2-server
A simple node-based http2 server (node v10.9 used)

* create https certification - see below (currently http2 [require https by all browsers](https://http2.github.io/faq/#does-http2-require-encryption))
* `npm i`
* `npm start`
* go to `https://localhost:3000/`

TLS/SSL certification
In this demo I've used self-signed certification using [openssl](https://www.openssl.org/).

You can follow the instruction on the official [node documentation](https://nodejs.org/api/tls.html#tls_tls_ssl_concepts), or use the following scripts:

* [windows batch script](https://github.com/WEBbeast2018/user-management/blob/master/scripts/makecert.bat)
* [shell script](https://gist.github.com/komuw/076231fd9b10bb73e40f)
