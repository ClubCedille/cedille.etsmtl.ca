# Site web du club CEDILLE

Presenting [CEDILLE](https://cedille.etsmtl.ca/) Homepage v2.0, generated with Hugo and a theme designed from scratch.
# Getting started

Requirements:

* [Hugo](https://gohugo.io/) (`apt install hugo`)

Alternatively :

* [Docker](https://docs.docker.com/get-docker/)
* [Docker-Compose](https://docs.docker.com/compose/install/)

# Usage 

## Production

To deploy the website, you can use the following command:
```bash
$ make prod
...
```
The website will then be deployed at the base-url defined in config.toml

## Development
### With docker

You can build locally with the following command :
```bash
$ make dev
...
```

### Without docker

locally build the site with :
```bash
$ make dev-hugo
...
```

## TODO
Check out our website's issues page for more details
