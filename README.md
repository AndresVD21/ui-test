# UI Test Zemoga

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Overview

In this branch we have all the logic to vote for a candidates in the grid, all the data is stored in a Firebase Database.

### Model

```json
{
    "id": string,
    "firstName": string,
    "lastName": string,
    "inSectorSince": string,
    "sector": string,
    "description": string,
    "thumbsUp": number,
    "thumbsDown": number,
    "img": string
}
```

### Firebase Collection

![Colection](./images/collection.png)
