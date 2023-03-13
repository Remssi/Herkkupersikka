# Herkkupersikka

Herkkupersikka is a web store application. It has user interfaces for clients and for resource management.

:coffee: *This is a hobbyist project* :coffee:

## Purpose

The purpose of this project was to try out Nest.js as backend framework, as well as to create fullstack project on my own.

## Feature goal list

*Feature goal list may update as features get implemented*

### Client

- Navigable website :heavy_check_mark:
- Product List :heavy_check_mark:
- Page for products
- Page for manufacturers
- Show sale price
- Show products by category
- Show products by sale
- Show products by manufacturer

### Admin

- List/Create/Edit/Delete products :heavy_check_mark:
- List/Create/Edit/Delete manufacturers :heavy_check_mark:
- List/Create/Edit/Delete sales :heavy_check_mark:
- List/Create/Edit/Delete categories :heavy_check_mark:

### Server
- CRUD products :heavy_check_mark:
- CRUD manufacturers :heavy_check_mark:
- CRUD sales :heavy_check_mark:
- CRUD :heavy_check_mark:

## Core Technologies

| Client           | Admin       | Server         |
|------------------|-------------|----------------|
| React            | React       | Node.js        |
| TypeScript       | TypeScript  | TypeScript     |
| Material UI      | Material UI | Nest.js        |
| React Router Dom | React Admin | TypeOrm        |
| Axios            | Vite        | PostgreSQL     |
| Jest             |             | Docker Compose |
| Create React App |             |                |

## To start developing:

in root directory: docker-compose up & yarn install

in client directory: yarn start

in server directory: yarn start:dev

in admin directory: yarn start
