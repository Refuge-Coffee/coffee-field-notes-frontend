FROM node:8.9.4

# ember server on port 4200
# livereload server on port 49152
EXPOSE 4200 49152
VOLUME ["/myapp"]
WORKDIR /myapp

RUN apt-get update -y
RUN apt-get install python-dev -y

# Installing Ember-Cli, Bower, and PhantomJS

RUN npm install -g yarn

RUN yarn global add ember-cli
RUN yarn global add phantomjs-prebuilt

# Installing Watchman!

RUN \
	git clone https://github.com/facebook/watchman.git &&\
	cd watchman &&\
	git checkout v4.9.0 &&\
	./autogen.sh &&\
	./configure &&\
	make &&\
	make install

RUN yarn install
