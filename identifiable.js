var library = require("module-library")(require)

module.exports = library.export(
  "identifiable",
  function() {

    function assignId(collection, id) {
      if (id) {
        demandId(collection, id)
        return id
      }

      do {
        var id = Math.random().toString(36).split(".")[1].substr(0,4)
      } while (collection[id])

      return id
    }

    function demandId(collection, id) {
      if (!id || id.length < 1) {
        throw new Error("identifiable.demandId needs to know what id you're demanding")
      }

      if (typeof collection[id] != "undefined") {
        throw new Error("Collection already contains a reference to "+id)
      }
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

    function getFrom(collection, description) {
      if (typeof description != "string") {
        throw new Error("2nd argument to identifiable.getFrom should be a string describing what's coming out of the collection. You passed "+JSON.stringify(description))
      }
        
      return get.bind(null, collection, description)
    }

    return {
      assignId: assignId,
      demandId: demandId,
      getFrom: getFrom,
    }
  }
)