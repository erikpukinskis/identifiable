If you don't need a query engine or persistence, **identifiable** can help you store a set of objects referenced by unique IDs:

```javascript
var identifiable = require("identifiable")

var erik = {
  name: "Erik",
  likes: ["rollerblading", "cooking from scratch", "chickens"]
}

var people = {}

identifiable.assignId(people, erik)

people[erik.id] = erik // NOTICE it doesn't add the object to the collection for you! That is not our concern.

var zombieErik = identifiable.getFrom(people, erik.id)
```

It does almost nothing. It generates unique IDs. It gives you errors when things go wrong.