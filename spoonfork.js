// How many entities can be seen at a time
let visibility = 3
let entities = []
// Append a new entity and drop the nearest one. Redraw the gamescene. This one is triggered after finishing every entity encounter.
const cycleEntity = (newEntity) => {
  cycleEntity.shift()
  document.getElementsByClassName('scene__output').innerHTML = ''
  entities.slice(0, visibility).map((entity, distance) =>
    entity.draw(distance))
}
let player = {}
const newGame = (player_obj) => {
  console.log(`New game with ${player_obj.type}`)
  player = player_obj
  mainMenuClasses = document.getElementsByClassName('main-menu')[0].classList
  mainMenuClasses.remove('layer--front')
  mainMenuClasses.add('layer--back')

  controlsClasses = document.getElementsByClassName('controls')[0].classList
  controlsClasses.remove('layer--back')

  sceneClasses = document.getElementsByClassName('scene')[0].classList
  sceneClasses.remove('layer--back')
  sceneClasses.add('layer--front')
}

const mainMenuClickButton = (option) => {
  options =
  { 'knight': () => newGame(new Knight())
  , 'wizard': () => newGame(new Wizard())
  , 'load':   () => {}}
  options[option]()
}

// random in [min; max]
const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max - min))

const prompt4 = (titles) => titles[0]

const prompt4Match = (matchObject) =>
  matchObject[prompt4(Object.keys(matchObject)).text]

class Player {
  constructor() {
    this.lives = 5
  }
  // Default magic is party popper. It would scare a lot of animals.
  magic() { return 'partyPopper' }
  // Default might is punch. It may inflict some small damage.
  might() { return 'punch' }

  receiveDamage() {
    this.lives--
    if (this.lives == 0) {
      // TODO: die here
    }
  }

  actCreature() {
    return prompt4Match(
      { 'Evade':       () => 'evade'
      , 'Communicate': () => 'talk'
      , 'Magic':       this.magic
      , 'Might':       this.might
    })()
  }

  actTreasure() {
    return prompt4Match(
      { 'Loot':    () => 'loot'
      , 'Kick':    () => 'kick'
      , 'Ignore':  () => 'ignore'
      , 'Examine': () => 'examine'
    })()
  }
}

class Knight extends Player {
  constructor() {
    super()
    this.type = 'knight'
  }

  might() {
    return prompt4Match({
      'Sword attack': 'sword',
      'Hard kick':    'hardkick',
      'Hard punch':   'hardpunch',
      'Shake':        'shake'
    })
  }
}

class Wizard extends Player {
  constructor() {
    super()
    this.type = 'wizard'
  }

  magic() {
    return prompt4Match({
      'Firework':       'firework',
      'Blow away':      'blowaway',
      'Lightning bolt': 'lightning',
      'Fireball':       'fireball'
    })
  }
}
