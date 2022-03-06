FROM yanqd0/hugo as build

EXPOSE 1313

WORKDIR /src

COPY . .

CMD [ "hugo", "server", "watch", "--bind", "0.0.0.0", "-p", "3000"]
