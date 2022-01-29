FROM nginx:alpine as build 

RUN apk add --update \
    wget

EXPOSE 1313

ENV HUGO_VERSION 0.92.1

EXPOSE 1313
RUN wget --quiet "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz" && \ 
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo /usr/bin

COPY ./ /site

WORKDIR /site

CMD [ "hugo", "server", "--buildDrafts", "watch", "--bind", "0.0.0.0", "-p", "3000"]


