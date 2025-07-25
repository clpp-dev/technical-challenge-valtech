import { IOClients, MasterData } from '@vtex/api'

export class Clients extends IOClients {
  public get masterdata() {
    return this.getOrSet('masterdata', MasterData)
  }
}
