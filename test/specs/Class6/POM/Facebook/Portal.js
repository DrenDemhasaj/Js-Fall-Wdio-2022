const Commands = require('../Commands')

class Portal {

    commands = new Commands()

    portalLocator = '=Portal'

   async clickPortalButton() {
    await this.commands.clickWebElement(this.portalLocator)
}
}
module.exports = Portal;