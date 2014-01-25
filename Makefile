TESTS=test/spec/*.js

all: node_modules

node_modules: package.json
	npm install
	touch node_modules

test: node_modules
	./node_modules/.bin/mocha --reporter dot $(TESTS)
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .

docs:
	@./bin/dox \
	  --verbose \
	  lib/* \
	  --out docs \
	  --title Dox \
	  --github visionmedia/dox \
	  --index index.md

doc-server:
	@./bin/dox \
		--server docs

.PHONY: all test docs