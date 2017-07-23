If you don't need a query engine or persistence, **identifiable** can help you store a set of objects referenced by unique IDs:

```javascript
var identifiable = require("identifiable")

var erik = {
  name: "Erik",
  likes: ["rollerblading", "cooking from scratch", "chickens"]
}

var people = {}

var id = identifiable.assignId(people, erik)

people[id] = erik

var zombieErik = identifiable.getFrom(people, id)

expect(zombieErik).to.equal(erik)
```

It does almost nothing. It generates unique IDs. It gives you errors when things go wrong.