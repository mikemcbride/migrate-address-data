# Migrate Address Data

This is a script to migrate address book data in firebase from the Firebase Realtime Database into a Cloud Firestore (document database). Private data is intentionally not included here, but the script may be a good reference.

## Usage

Make sure you have a valid SDK cert (you get this from the Firebase console), and save that in `serviceAccount.json`.

Export your Firebase Realtime Database data. This script expects a flat object structure - no nested collections or anything. Your `realtimeData.json` should be an object with keys of the data. That means when you export from Firebase, you'll need to remove the collection name property. In the example below, this might be what your export looks like. You will need to remove the top level attribute, and just get the items from the `myCollection` property.

```json
{
  "myCollection": {
    "some-unique-id": { },
    "another-unique-id": { }
  }
}
```

So it should look like:

```json
{
  "some-unique-id": { },
  "another-unique-id": { }
}
```

Once you've got that set up, just run:

```sh
node index.js my-collection-name
```

Where `my-collection-name` is the name of the collection in your Cloud Firestore.