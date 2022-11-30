const Commands = require('../Commands')

class Instagram {

    commands = new Commands()

    instagramLocator = '=Portal'

   async clickInstagramButton() {
    await this.commands.clickWebElement(this.instagramLocator)
}
}
module.exports = Instagram;