var library = require("module-library")(require)

module.exports = library.export(
  "identifiable",
  function() {

    function assignId(collection, item) {
      do {
        var id = Math.random().toString(36).split(".")[1].substr(0,4)
      } while (collection[id])

      item.id = id
    }

    function get(collection, description, ref) {
      if (!ref) {
        throw new Error("Tried to find a "+description+" but you didn't provide an id.")
      }

      if (typeof ref == "string") {
        var item = collection[ref]
      } else {
        var item = ref
      }

      if (!item) {
        throw new Error("No "+description+" with id "+ref+" in collection")
      }

      return item
    }

    return {
      assignId: assignId,
      getFrom: function(collection, options) {
        var description = options && options.description || "item"
        return get.bind(null, collection, description)
      }
    }

  }
)