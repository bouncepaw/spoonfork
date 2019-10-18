// Entity is something player can encounter. During the encounter, player chooses what to do. Entity decides how to react to the choice using function this.encounter.
class Entity {
  constructor(id, name, type, img, script) {
    // Unique identifier written in lowercase latin letters.
    this.id     = id
    // Name displayed in user interface.
    this.name   = name
    // Type ∈ ['creature', 'location', 'treasure']
    this.type   = type
    // Image displayed in user interface. Any extension.
    this.img    = `sprite/${img}`
    // Function used on encounter.
    this.script = script
    // DOM Node representing this entity in user interface.
    this.node = document.createElement('object')
    this.node.setAttribute('type', 'image/svg+xml')
    this.node.setAttribute('data', this.img)
  }

  // The more the distance is, the less the size is.
  draw(distance) {
    const height1x = 400
    this.node.setAttribute('height', height1x / (distance + 1))
    this.node.style.zIndex = 50 - distance
    document.
      getElementsByClassName('scene__output')[0].
      appendChild(this.node)
  }

  encounter(player) {
    this.script(player)
  }
}


