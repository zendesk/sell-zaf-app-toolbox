FROM ruby:2.3.1
RUN gem install zendesk_apps_tools

ENV NPM_VERSION=6.13.4
ENV NODE_VERSION=13.5.0
ENV NVM_DIR=/root/.nvm
ENV WORKDIR=/app

RUN mkdir -p $NVM_DIR
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | sh
RUN . "$NVM_DIR/nvm.sh" && \
    nvm install ${NODE_VERSION} && \
    nvm use --delete-prefix v${NODE_VERSION} --silent && \
    nvm alias default v${NODE_VERSION}
RUN ln -s $NVM_DIR/versions/node/v${NODE_VERSION}/bin/node /usr/bin/node
RUN ln -s  $NVM_DIR/versions/node/v${NODE_VERSION}/bin/npm /usr/bin/npm
RUN npm install -g npm@$NPM_VERSION
RUN curl -H 'Cache-Control:no-cache' https://raw.githubusercontent.com/fossas/fossa-cli/master/install.sh | sh

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR
