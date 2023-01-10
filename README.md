# Cluster Scanner

![GitHub](https://img.shields.io/github/license/bloxapp/cluster-scanner)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bloxapp/cluster-scanner/Lint%20and%20test)
![GitHub package.json version](https://img.shields.io/github/package-json/v/bloxapp/cluster-scanner)

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/bloxapp/cluster-scanner)
![GitHub contributors](https://img.shields.io/github/contributors/bloxapp/cluster-scanner)
![GitHub last commit](https://img.shields.io/github/last-commit/bloxapp/cluster-scanner)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bloxapp/cluster-scanner)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/author/bloxapp/cluster-scanner)

![Discord](https://img.shields.io/discord/723834989506068561?style=for-the-badge&label=Ask%20for%20support&logo=discord&logoColor=white)

Important dependencies:

* ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/bloxapp/cluster-scanner/web3?style=social)

---

Library and CLI to work with the cluster scanner:
1. Retrieve the latest validators cluster snapshot from the blockchain

## Running from the CLI

### Installation

This installation requires NodeJS on your machine.
You can download it [here](https://nodejs.org/en/download/).

Once you have installed NodeJS, follow instructions:

```bash
git clone https://github.com/bloxapp/cluster-scanner.git
cd cluster-scanner
npm i yarn -g
yarn cli --help
```

### Running from repository

- For regular CLI usage you will be running the command as: `yarn cli ...`
- Follow [installation](#Installation) instructions.


### Help

Help on available actions:

```bash
yarn cli --help
```

### Example

**Input parameters:**

- node-url (n) = The ETH1 node url
- ssv-contract-address (ca) = Keystore password
- owner-address (op) = Cluster owner address
- operator-ids (oids) = Comma separated operator ids list

```bash
yarn cli -n .... -ca .... -oa ..... -oids=1,2,3,4
```

**Output:**  serialised cluster data

## Integration in your projects

### Node Project

To run an example of a NodeJS project containing all the code snippets to build the share and transaction payload, simply follow these instructions!

```bash
cd examples/node
npm install
```

To run a JavaScript example:

```bash
npm run start
```

## Development

### Run the CLI as a TypeScript executable:

```bash
yarn dev:cli ...
```

### Run the CLI as a JavaScript compiled executable:

```bash
yarn cli ...
```

### Lint

```bash
yarn lint
```

### Building

Build TypeScript into JavaScript

```bash
yarn build
```

Build for NodeJs using `esbuild`

```bash
yarn esbuild
```

Build everything

```bash
yarn build-all
```

## TODO


## Authors

* [Wadym Ciumac](https://github.com/vadiminc)

## License

MIT License
