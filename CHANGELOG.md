# Change Log

## [1.0.0] - 2023-03-04

### Added
- Enable public access to GCR hosted url [`ff85de`](https://github.com/horus2121/To-Dos/commit/ff85de6c561338df311a87062435a3d120ff5730)
- Authenticate docker to access GCR in gcr-deployment workflow [`27bb5e`](https://github.com/horus2121/To-Dos/commit/27bb5e778ca453d0789779678a67d4d7215fff1b)
- Set firebase service account key as GCR secret, update server side firebase config [`0b1bea`](https://github.com/horus2121/To-Dos/commit/0b1bea0af8e1907773c7ff423e4a91ffee915e18)

### Fixed
- Fix incorrect IMAGE_NAME in the last step of gcr-deployment workflow [`a90c0d`](https://github.com/horus2121/To-Dos/commit/a90c0d5e093df6a3257b3f6118be5ca3323f56fd)

## [1.0.0] - 2023-03-03

### Added
- Add deployment document link to README.md [`2a9aa9`](https://github.com/horus2121/To-Dos/commit/2a9aa9494fac46af0a94b25e04a902582b06adf2)
- Add automated testing workflow [`ce99e4`](https://github.com/horus2121/To-Dos/commit/ce99e42c358064514f935744fc97fcb6487f4174)

## [1.0.0] - 2023-03-02

### Added
- Add Dockerfile for containerizing, add necessary config to fit in google cloud environment [`7008f5`](https://github.com/horus2121/To-Dos/commit/7008f57710dbd2362d5ffb59b6eb9915fefb909b)

## [1.0.0] - 2023-02-23

### Added
- Update CHANGELOG.md [`3fcb9e0`](https://github.com/horus2121/To-Dos/commit/3fcb9e05b77b3fbc2896e7462ae549624818a2cb)
- Update README.md [`7665323`](https://github.com/horus2121/To-Dos/commit/7665323e66a04a7738f868af096014ed073d4b31)

### Fixed
- Add necessary module for ng spec tests to pass initial test, test taskService for #getTaskList and #addNewTask [`8ed9d47`](https://github.com/horus2121/To-Dos/commit/8ed9d4760204202689d7280df2697d6d0ea163c5)

## [1.0.0] - 2023-02-22

### Added
- Adjust to-do-list page flex layout using ngFlexLayout [`a7b982d`](https://github.com/horus2121/To-Dos/commit/a7b982dc248e9872682e6cd35ec6d563f8c41427)
- Use mat-grid-list for displaying task list, update editTask to maintain its function, improve admin experience for modifying user's authorization by adding selection and save button [`0c01ff4`](https://github.com/horus2121/To-Dos/commit/0c01ff48191fb7780df4847d4522811452fb56ee)

## [1.0.0] - 2023-02-21

### Added
- Initial attempt with containerization, play with Dockerfile and docker-compose.yml, not eazy :D

## [1.0.0] - 2023-02-20

### Added
- Inject translated content to task state, only allow translation for entire task list once, later added tasks should be injected with translated content automatically [`0dc2f8f`](https://github.com/horus2121/To-Dos/commit/0dc2f8faa124ec594fd268d7d49fb843071ff704)
- Add admin page for managing users [`1263c83`](https://github.com/horus2121/To-Dos/commit/1263c8352e8338f3d19241db5ee5cd7aa1054878)

## [1.0.0] - 2023-02-19

### Added
- Restructure task status using type union [`e6d1a17`](https://github.com/horus2121/To-Dos/commit/e6d1a1786434a83625dc74022e88e53e07cc99aa)

### Fixed
- Fix Firebase JWT Token issue [`7d1b714`](https://github.com/horus2121/To-Dos/commit/7d1b714f0e784ba38964dc84cbd37a2882fae7de)

### Added
- Set up ngrx store, create actions, reducers, effects, selectors for tasks [`d43a0c5`](https://github.com/horus2121/To-Dos/commit/d43a0c59f9bbe009ad07ee74bde1f91d94fb6fac)

## [1.0.0] - 2023-02-15

### Added
- Set up task related apis [`e4029be`](https://github.com/horus2121/To-Dos/commit/e4029bea359f01294dc6d4fa1bd92a9d2067cf73)

### Fixed
- Modify lint config on server to adapt typescript development environment [`77ff1a5`](https://github.com/horus2121/To-Dos/commit/77ff1a5c6cfbf748f582214a5c7375a5004bede7)

### Added
- Add typescript to express server [`5f617e2`](https://github.com/horus2121/To-Dos/commit/5f617e23a9209021f6177f2747421ac1f1dbdfb8)

## [1.0.0] - 2023-02-14

### Added
- Add isAdmin custom claim to users to distinguish user's authorization [`6de1289`](https://github.com/horus2121/To-Dos/commmit/6de128939d372b8904ffcca08bafd701833e5093)
- Add displayName property to users, set up checkIfAuthenticated and checkIfAdmin middlewares on server to protect routes, enable es6 module type on express server [`dd0ceac`](https://github.com/horus2121/To-Dos/commit/dd0ceac17551e54a9b674a861ae71d8f875540d8)
- Integrate authencication as a whole [`5b4f7a0`](https://github.com/horus2121/To-Dos/commit/5b4f7a075bb99a1d628d2ffcc4c5119eabbbff39)
- Add proxy config to enable angular CORS, change express cors origin option to match angular default port [`6b918cb`](https://github.com/horus2121/To-Dos/commit/6b918cb1edb79f69dfc2a9a896f959f77a34eb9a)

## [1.0.0] - 2023-02-13

### Added
- Set up firebase-admin SDK on server side, create a middleware to decode token sent from frontend and check its validity, applied to all routes [`a52c63f`](https://github.com/horus2121/To-Dos/commit/a52c63fa700bcee56effcee64c38d02c7de5d623)

## [1.0.0] - 2023-02-10

### Added
  
- Add script "npm run version" for generation changelog, the script should be run in the root directory [`4829006`](https://github.com/horus2121/To-Dos/commit/4829006a132bc6e0b4e97d6f85f08b3419c943b4)
- Add eslint and prettier, create .eslintrc .prettierrc for linting config, tested with current repo [`2c2850b`](https://github.com/horus2121/To-Dos/commit/2c2850b9c175d1a08a546fce58845f7fea30df83)
- Add postgresql, use sequelize as the ORM, created two routes for testing apis [`64c1265`](https://github.com/horus2121/To-Dos/commit/64c1265f40bad6b188ff965acb6c718e9262b63d)
- Immigrate from previous serverless app [`0d34a25`](https://github.com/horus2121/To-Dos/commit/0d34a257d20b6efe8a41ee002b5aa9b4c5f5476e)