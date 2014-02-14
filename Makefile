TESTS=test/spec/*.js
VPATH:=tmpl

all: node_modules tmpl/_mdox.yate.js tmpl/default.yate.js

node_modules: package.json
	npm install
	touch node_modules

test: node_modules
	./node_modules/.bin/mocha --reporter dot $(TESTS)
	./node_modules/.bin/jshint .
	./node_modules/.bin/jscs .

tmpl/_mdox.yate.js: _mdox.yate node_modules
	./node_modules/.bin/yate $< > $@

tmpl/default.yate.js: default.yate _mdox.yate.js
	./node_modules/.bin/yate $< --import tmpl/_mdox.yate.obj > $@


.PHONY: test

