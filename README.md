# json-schema-viewer

Welcome to Teselagen's JSON Schema Viewer! (All credit for the original functionality goes to https://github.com/tnrich/json-schema-viewer)

This site is used to host and view JSON Schemas for Teselagen's software.

Try it out today at: https://json-schema.app

## Adding a schema

Just add a new schema to the `schemas` folder and add a link to it in `<SchemaApp>` by adding a new button:

```jsx
<NavigationButtonItem
  onClick={props.closePopup}
  exampleUrl="./schemas/design.json"
>
  Design
</NavigationButtonItem>
```

JSON Schema is awesome. It lets you define and validate the schema for your JSON object and is used to define many many JSON structures.
For example schemas, please see: https://www.schemastore.org/json/

## Running Locally

1. Run `yarn` to install the dependencies.
2. Run `yarn start`

Now open: http://localhost:8081 to see the site and develop it live.

## Deployment

1. Make sure you've run the project locally to get the built files.
2. Commit your changes (their should be changes under the built docs folder)
3. Push to master

This should update the gh pages site here https://tnrich.github.io/json-schema-viewer

