# KidsLoop H5P Service

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**Links**

- [Source H5P library](https://github.com/Lumieducation/H5P-Nodejs-library)
- [Our fork of the H5P library](https://bitbucket.org/calmisland/h5p-nodejs-library)
- [Build artifacts of our fork](https://bitbucket.org/calmisland/h5p-nodejs-library-packages)

**Branching model**

- `feature/fix/etc` -> `alpha`
- Merging commits into the alpha branch will automatically deploy to alpha.
- Cherry-pick commits into master branch that are approved by project manager.
- The master branch serves as the "production" branch.
- The master branch pipeline has a manual _version bump_ step.
- That step will build/push a docker image to ECR with the version tag.
- alpha branch commits are cherry-picked into the master branch.

📢 Follow the specification covered in [CONTRIBUTING.md](CONTRIBUTING.md) 📢

## Local development

### Prerequisites

#### Installation

- Node v16.x.x
- Npm v6.x.x
- Docker (if you plan on using MinIO, Redis, and MongoDB features)

### Notes

- The `.env` and `docker-compose` files are only used for local development.
- The CMS service only uses the `/token/:token` endpoints. The other ones are only convenience for local development, which can be enabled by setting `NODE_ENV=localdev`.
- Detailed docs can be found in the source repository.

#### Configuration

Copy/paste `.env.example` in the root directory, rename it to `.env`, and modify as necessary.

### Running

Ensure all dependencies are installed

```
npm install
```

Run

```
npm start
```

Run transpiled version

```
npm run build
npm run start:dist
```

### Debugging

1. Navigate to the VS Code sidebar debug panel
2. Select `express.ts` from the dropdown
3. Click the green arrow debug button

### Testing

Run unit tests

```
npm run test:unit
```
