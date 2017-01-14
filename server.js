const express = require('express')

express()
	.get('/', (request, response) => {
		response.send('working')	
	})
	.listen(3000)
