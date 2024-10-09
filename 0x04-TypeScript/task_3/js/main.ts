// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Step 1: Create the RowElement object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Step 2: Insert the row and get the RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Step 3: Create an updated RowElement with the age field
const updatedRow: RowElement = { ...row, age: 23 };

// Step 4: Update the row
CRUD.updateRow(newRowID, updatedRow);

// Step 5: Delete the row
CRUD.deleteRow(newRowID);

