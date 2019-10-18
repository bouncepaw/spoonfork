class ControlsDir {
  constructor(dir) {
    this.dir = dir
    this.element = document.querySelector(`controls__${dir}`)
    this.label = document.querySelector(`controls__${dir} controls__text`)
    this.key = `Arrow${this.dir.chatAt(0).toUpperCase() + this.dir.slice(1)}`
  }

  setNewLabel(label) {
    this.promptResult = null
    this.label.innerText = label
  }

  prompt() {
    if (promptResult) return this.promptResult
  }

  matchingKey(key) {
    if (this.key == key) return true
  }
}

class Controls {
  constructor() {
    this.dirs = ['left', 'down', 'up', 'right'].map(d => new ControlsDir d)
  }

  listener(event) {
    
  }

  prompt(labels) {
    this.dirs.map(d, i => d.setNewLabel(labels[i]))
    document.addEventListener('keydown', listener)
    let result = null
    const timerId = setInterval(() => {
      // TODO: do
      this.dirs.map(d, i => if (d.matchingKey()))
    }, 50)
  }
}
