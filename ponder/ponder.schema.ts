import { createSchema } from '@ponder/core'

export default createSchema((p) => ({
  CreatedPool: p.createTable({
    id: p.string(),
    owner: p.string(),
    timestamp: p.string(),
  }),
}))
