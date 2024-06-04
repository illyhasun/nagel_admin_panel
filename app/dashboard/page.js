import Replenishment from '../components/replenishment/replenishment'
import Statistics from '../components/statistics'

import classes from './page.module.css'

export default function Dashboard() {
  return (
    <main className={classes.dashboard}>
      <Replenishment />
      <Statistics />
    </main>
  )
}
