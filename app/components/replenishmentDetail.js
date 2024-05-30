import classes from './replenishmentDetail.module.css'
import Overlay from './ui/overlay'
export default function ReplenishmentDetail({ stingifyReplenishment }) {

  const replenishment = JSON.parse(stingifyReplenishment)
  return (
    <div className={classes.replenishmentDetailContainer}>
      <h2>Navrh zavozu na [storename] [date of replenishment]</h2>
      {replenishment.status === 'completed' && (
        <div className={classes.replenishmentInfo}>
          <p>Confirmed by: {replenishment.confirmedBy}</p>
          <p>Confirmation time: {replenishment.confirmationTime}</p>
        </div>
      )}
      <form className={classes.replenishmentForm}>
        <div className={classes.item}>
          <p>Product 1 - light blue</p>
          <p>19043980753894022</p>
          {replenishment.status === 'completed' ? <p>300</p> : <input value='300' type='text' name='zavoz' />}
        </div>
        <div className={classes.item}>
          <p>Product 1 - light blue</p>
          <p>19043980753894022</p>
          {replenishment.status === 'completed' ? <p>300</p> : <input value='300' type='text' name='zavoz' />}
        </div>
        <div className={classes.item}>
          <p>Product 1 - light blue</p>
          <p>19043980753894022</p>
          {replenishment.status === 'completed' ? <p>300</p> : <input value='300' type='text' name='zavoz' />}
        </div>
        <button type="submit">Podtvrdit</button>
      </form>

    </div>
  )
}

