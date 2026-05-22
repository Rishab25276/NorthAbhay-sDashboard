import { Hono } from 'hono'
import dashboard from '../public/dashboard.html?raw'

const app = new Hono()

// Serve the dashboard
app.get('/', (c) => {
  return c.html(dashboard)
})

app.get('/dashboard.html', (c) => {
  return c.html(dashboard)
})

export default app
