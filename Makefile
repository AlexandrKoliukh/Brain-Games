install:
	npm install


run:
	npm run babel-node -- src/bin/brain-games.js


publish:
	npm publish

lint:
	npx eslint src/