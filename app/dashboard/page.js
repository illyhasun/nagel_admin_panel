import Replenishment from "../components/replenishment";
import Warning from "../components/ui/warning";

import classes from './page.module.css'

export default function Dashboard() {
  return (
    <main className={classes.dashboard}>
      <div>Dashboard</div>
      {/* <Warning /> */}
      <Replenishment />
    </main>
  )
}
