If you don't need a query engine or persistence, **identifiable** can help you store a set of objects referenced by unique IDs:

```javascript
var identifiable = require("identifiable")

var erik = {
  name: "Erik",
  likes: ["rollerblading", "cooking from scratch", "chickens"]
}

var people = {}
var get = identifiable.getFrom(people, {description: "person"})

var id = identifiable.assignId(people)

people[id] = erik

var zombieErik = get(id)

expect(zombieErik).to.equal(erik)
```

It does almost nothing. It generates unique IDs. It gives you errors when things go wrong.

If you are OK with getters returning undefined:

```javascript
var maybeErik = get(id, true)
```

### Why

A database is overkill if you just need a hash of items. Not everything needs a persistence AI backing it up.

This module is basically boilerplate, but it's boilerplate that you pretty much always need when you're indexing something by ID. So it's kind of not worth copy/pasting.

IDs are kind of always a security concern. In the future, perhaps this module can provide some assurances about the entropy in an ID.
