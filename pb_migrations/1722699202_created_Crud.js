/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fuk8stuinuwvufw",
    "created": "2024-08-03 15:33:22.436Z",
    "updated": "2024-08-03 15:33:22.436Z",
    "name": "Crud",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vpnpg8d8",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "prwoenry",
        "name": "Description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fuk8stuinuwvufw");

  return dao.deleteCollection(collection);
})
