import classes from './replenishmentDetail.module.css'
import ReplenishmentItemsList from './replenishmentItemsList'
export default function ReplenishmentDetail({ stingifyReplenishment }) {

  const replenishment = JSON.parse(stingifyReplenishment)
  return (
    <div className={classes.replenishmentDetailContainer}>
      <h1>Navrh zavozu na {replenishment.store_name} - {replenishment.replenishment_date}</h1>
      {replenishment.confirmed_by && (
        <div className={classes.replenishmentInfo}>
          <p>Confirmed by: {replenishment.confirmed_by}</p>
          <p>Confirmation time: {replenishment.confirmation_date}</p>
        </div>
      )}
      <ReplenishmentItemsList stingifyReplenishment={stingifyReplenishment}/>
    </div>
  )
}

