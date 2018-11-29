[![Build Status](https://travis-ci.org/interra/catalog-frontend.svg?branch=master)](https://travis-ci.org/interra/catalog-frontend)

# Interra Catalog Frontend 

React app for building front ends for open data catalogs. This project uses [React Boilerplate](https://www.reactboilerplate.com/) as a starting point.

![interra home page](https://user-images.githubusercontent.com/512243/49232195-7ca18d00-f3c1-11e8-928f-5d4fbecf8aec.png)

![interra search page](https://user-images.githubusercontent.com/512243/49232411-e15ce780-f3c1-11e8-8953-cc2f23dfdee5.png)

## Early Beta

This is an in early beta. Please ask questions or make tickets.

## Getting Started

See [React Boilerplate](https://www.reactboilerplate.com/) for tools and workflow.

To install:

1. clone the repo 
2. Copy config-example.yml to config.yml
3. run:

```bash
npm run build:dll
npm run start
```

This will create an auto-loading dev server.

## Export to Production

```bash
npm run build
```

Will create an export of the site to the ``build`` directory.

## Config.yml

The ``config.yml`` file has a number of settings that are exported by webpack as variables for the site. These are documented: https://github.com/interra/catalog-frontend/blob/master/docs/configuration/index.rst

## API

This front-end expects certain APIs to work. To test and develop locally you can use http://catalog-demo.interra.io/api/v1/ as an endpoint. The ``swagger.json`` file describes the current API. This assumes using the project open data schema. However this is an extremely flexible library. Any type of spec that describes collections could be used. See https://github.com/interra/catalog-frontend/blob/master/swagger.json for the schema description. Basically it expects a primary collection, ie "dataset", and additional collections that should have a json schema description in the API.

## DKAN Example

This is currently being used to power the Drupal 8 version of DKAN: https://github.com/getdkan/dkan2
