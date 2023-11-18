## Question Paper Generator application

The application stores a variety of questions in a designated Question Store. Each question is characterized by the following attributes: {question, subject, topic, difficulty, marks}. The Question Paper Generator scans the Question Store to subsequently generate a question paper. This generation process is contingent upon the total marks desired and the distribution of marks based on the level of difficulty.

## Prerequisites

* Node.js v16.x or later
* npm v7.x or later

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/manikanta700/reelo.git
```

2. Navigate into the project directory:

```bash
   cd reelo
```
3. Install the project's dependencies:

```bash
   npm install
```


## Run the Program

```bash
   npm start
```

## Program Structure

 
 * [data](./data)
   * [questions.json](./data/questions.json)
 * [generator.js](./generator.js)
 * [index.js](./index.js)
 * [package.json](./package.json)
 * [README.md](./README.md)
 
