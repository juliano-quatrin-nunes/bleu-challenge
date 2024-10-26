## Project Overview

This project was developed as part of a selection process challenge. Its main objective is to allow users to view and manage metadata for Balancer pools, using IPFS for decentralized data storage.

The frontend of the project was built with Next.js and deployed on Vercel. You can access it [here](https://bleu-challenge-three.vercel.app/).

The Ponder project, used for indexing, was deployed on Railway, as suggested in the Ponder documentation. You can make GraphQL requests directly to it using [this link](https://bleu-challenge-production.up.railway.app/).

I recorded two videos to showcase the project: one demonstrating the production version and highlighting the key features, and another discussing the challenges I faced during development. You can watch them here: [Production Demo Video](https://www.loom.com/share/7de51d206879423db92bb1a4f2f59cde?sid=6a7ce00a-76b0-42a7-87f9-1289d724fda3) and [Challenges Video](https://www.loom.com/share/08721e82d1514a06a7bb80224f551a8b?sid=482681bf-0ca4-4e4c-8945-4bd22df7908e).

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

1. Install the dependencies using the package manager of your preference.
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

## Architecture Decisions

### Choice of Next.js for Frontend

The decision to use Next.js was based on familiarity with the framework, and the pages directory was utilized for the same reason. The project uses version 14, which includes React Server Components, enhancing performance by allowing server-side rendering. For styling, CSS Modules were chosen due to their modularity and scope isolation, which helped maintain clean and manageable styles that are scoped to individual components.

### Form Management with Formik

Formik was selected for form handling in the frontend because of its ease of use and built-in support for array fields. This made form creation more efficient.

### Wallet Connection and Blockchain Integration

To facilitate smooth wallet connections, RainbowKit was implemented due to its simplicity and user-friendly interface.
Wagmi was also used, as it provides essential hooks for reading and writing to smart contracts, as well as managing user connections.

### State and Data Fetching with TanStack Query and Axios

TanStack Query was chosen for handling queries, mutations, and caching, as it is already used by Wagmi, and I am familiar with it. Additionally, Axios was selected as the HTTP client to handle requests, particularly for pinning and retrieving metadata from IPFS via Pinata.

### Ponder for Indexing Balancer Pools

A separate Ponder project was set up to handle the indexing of on-chain data, specifically to retrieve all pools registered in the Balancer Pool Metadata contract via the Balancer Vault contract. By default, it provides a GraphQL server, which was used in the frontend to fetch pools associated with specific users. Ponder was chosen based on the team's suggestion.

## Assumptions and Simplifications

It was designed so that metadata names can be user-defined, allowing flexibility in form entries. Each metadata entry has two fields: one for the name and one for the value. Additionally, users can add or remove fields as needed.

The value for each metadata is always treated as a string. Adding objects or other complex data types as metadata values is not supported, simplifying the form handling process.

To keep the design lightweight and focused on core functionality, more complex components like spinners for loading states or tooltips on buttons were not implemented. The decision was made to keep the design minimal, prioritizing functionality over UI complexity. A potential improvement for future iterations would be to include these components to enhance user experience.
