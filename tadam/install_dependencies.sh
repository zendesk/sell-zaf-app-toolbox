set -euo && \
    eval "$(ssh-agent -s)" && \
    cp /secrets/zd-svc-qabot-privatekey ./key && \
    chmod 600 ./key && \
    ssh-add ./key && \
    mkdir -p ~/.ssh && \
    chmod 0700 ~/.ssh && \
    ssh-keyscan github.com > ~/.ssh/known_hosts && \
    npm install && \
    rm -rf ~/.ssh && \
    rm -rf ./key
