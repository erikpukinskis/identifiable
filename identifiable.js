var library = require("module-library")(require)

module.exports = library.export(
  "identifiable",
  function() {

    function assignId(collection, item) {
      do {
        var id = Math.random().toString(36).split(".")[1].substr(0,4)
      } while (collection[id])

      return id
    }

    function get(collection, description, ref, allowUndefined) {
      if (!ref && allowUndefined) {
        throw new Error("Tried to find a "+description+" but you didn't provide an id.")
      }

      if (typeof ref == "string") {
        var item = collection[ref]
      } else {
        var item = ref
      }

      if (!item && allowUndefined) {
        return undefined

      } else if (!item) {
        throw new Error("No "+description+" with id "+ref+" in collection")

      } else {
        return item
      }
    }

    return {
      assignId: assignId,
      getFrom: function(collection, options) {
        if (typeof options == "string") {
          var description = options
        } else {
          var description = options && options.description || "item"
        }
        
        return get.bind(null, collection, description)
      }
    }

  }
)