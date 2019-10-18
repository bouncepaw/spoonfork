class ControlsDir {
  constructor(dir) {
    this.dir = dir
    this.element = document.querySelector(`controls__${dir}`)
    this.label = document.querySelector(`controls__${dir} controls__text`)
    this.key = `Arrow${this.dir.chatAt(0).toUpperCase() + this.dir.slice(1)}`
    this.promptResult = null

    document.addEventListener('keydown', (event) => {
      if (this.key == event.key) {
        this.promptResult = this.label.innerText
      }
    })
  }

  setNewLabel(label) {
    this.promptResult = null
    this.label.innerText = label
  }

  prompt() {
    if (promptResult) return this.promptResult
  }
}

class Controls {
}
