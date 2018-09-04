const fs = require('fs');
const http2 = require('http2');

const HTTPSoptions = {
	key: fs.readFileSync('./cert/selfsigned.key'),
	cert: fs.readFileSync('./cert/selfsigned.crt'),
};
const template = `
<!DOCTYPE html> 
<html>
<body>
	<script type="text/javascript">
		const  source = new EventSource('/sse/');
		source.onmessage = function(e) { 
			document.body.innerHTML += e.data + '<br>';
		};
	</script>
</body>
</html>
`;


const server = http2.createSecureServer(HTTPSoptions);

server.on('request', (req, res) => {
	req.socket.setKeepAlive(true);

	if(req.url === '/sse/') {

		res.writeHead(200, {
			'Content-Type': 'text/event-stream', // <- Important headers
			'Cache-Control': 'no-cache'
		});
		res.write('\n');

		setInterval(() => res.write(`data: ${Math.random()}\n\n`), 200);
	} else {
		res.end(template);
	}
});

server.listen(3000);


