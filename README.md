### About

<b>Movies Library</b> Development using:

- Package manager: Npm<br>
- Compiler: Babel<br>
- Bundler: Webpack<br>
- CSS preprocessor: Sass<br>
- Client side: React.js<br>
  - State management: Redux<br>
- Server side: Node.js<br>
- Database: MongoDB<br>

### Prerequisites

- Node.js & npm - [Download & Install Node.js](https://nodejs.org/en/download/)
- MongoDB - [Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Unix based operation system([os x](https://en.wikipedia.org/wiki/OS_X), [ubuntu](<https://en.wikipedia.org/wiki/Ubuntu_(operating_system)>), [fedora](<https://en.wikipedia.org/wiki/Fedora_(operating_system)>), etc.)

## Up and Running

Create the MongoDB data directory, if you don't have so

```sh
mkdir -p /data/db
```

Run MongoDB

```sh
mongod
```

In the project directory run below scripts:

```sh
npm install
```

to install dependencies

```sh
npm run start
```

to start the api. Also in the project directory run

```sh
npm run dev
```

like another process, to start the webpack dev server.

Open [http://localhost:8080](http://localhost:8080) to view app in the browser.

To start interact with content add movies choosing `Add movie` from the navigation bar or `Import movies` to import all movies to the database from file **sample_movies.txt**, laying under path `/src/app/data` of the root directory of a project. The added content will immediately appear on the home page.
