# Bleu Challenge

<!-- introdução -->

## Project Overview

<!-- Falar o objetivo do projeto, colocar link para produção e link explicando o projeto -->

## Setup and Running Instructions

To run this project on your local environment, for first, clone this repository. You will need to have installed previously `node` and `npm` package manager.

This repository is made of two different projects, separed by two folders: frontend and ponder.

### Ponder project

To run ponder application, navigate to ponder folder, and create the file `.env.local` with the content of `.env.local.example`. You can change the RPC Sepolia URL to any public RPC for Sepolia if you wan't (find [here](https://chainlist.org/chain/11155111)), but it should work with the default one.

At the directory "/ponder", install the dependencies:

```bash
npm install
#or
yarn
#or
pnpm install
```

After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will begin the indexing functions, and will show a progress bar.

### Next.js project

To run the frontend of the application, go to the directory `frontend/`, and do the same steps used for running the ponder project:

1. Install the dependencies using the package manager you want;
2. Run the development server.

## Implemented Features

I have established three key criteria to prioritize various features:

1. **Essentiality**: Features critical to the project's functionality.
2. **Familiarity and Difficulty**: The complexity of the task and my familiarity with the required tools.
3. **Value Delivery**: Features that will provide significant value to project clients.

The highest priority features for implementation were the **Must Have** requirements, specifically the pool metadata visualization and the ability to update pool metadata.

To initiate the implementation of these features, I created a design prototype in Figma. This prototype aimed to develop an intuitive interface while designing specific yet straightforward components. It also facilitated testing how these components would function together. Furthermore, the prototype served as a reference point for the subsequent frontend development, which started immediately after its completion.

The requirement "**Implement a form for metadata updates"** directly corresponds to the metadata update functionality. Thus, this task was prioritized immediately after the metadata reading feature, simultaneously with the metadata update.

Following that, I scheduled the development of a sidebar that lists all pools owned by the user. While this feature was deemed important, it was not essential. Additionally, it posed a higher level of difficulty since it required the development of an indexer to implement effectively.

