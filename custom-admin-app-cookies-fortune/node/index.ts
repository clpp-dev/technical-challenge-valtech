import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'
import { configMiddleware } from './middleware/config'
import { cookiesFortuneMiddleware } from './middleware/products'

const TIMEOUT_MS = 800

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>
  interface State extends RecorderState {
    code: number
  }
}

export default new Service({
  clients,
  routes: {
    config: method({
      GET: [configMiddleware],
    }),
    cookiesfortune: method({
      GET: [cookiesFortuneMiddleware],
    }),
  },
})
