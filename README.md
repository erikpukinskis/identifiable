If you don't need a query engine or persistence, **identifiable** can help you store a set of objects referenced by unique IDs:

```javascript
var identifiable = require("identifiable")

var erik = {
  name: "Erik",
  likes: ["rollerblading", "cooking from scratch", "chickens"]
}

var people = {}

identifiable.assignId(people, erik)

var zombieErik = identifiable.getFrom(people, erik.id)
```

It does almost nothing. It generates unique IDs. It gives you errors when things go wrong.