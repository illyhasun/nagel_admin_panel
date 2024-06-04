import { useState } from 'react'
import PercentageInput from '../ui/percentageInput'
import { getCurrentDate } from '@/app/utils/dates'

import classes from './replenishmentItemsList.module.css'


export default function ReplenishmentItemsList({ stingifyReplenishment }) {

    const replenishment = JSON.parse(stingifyReplenishment)
    const [replenishmentItems, setReplenishmentItems] = useState(replenishment.replenishment_items)

    const handleQuantityChange = (index, newQuantity) => {
        const updatedItems = [...replenishmentItems]
        updatedItems[index].confirmed_quantity = newQuantity
        setReplenishmentItems(updatedItems)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedReplenishment = {
            ...replenishment,
            replenishment_items: replenishmentItems,
            confirmed_by: 'USER A',
            confirmation_date: getCurrentDate()
        }
        console.log(updatedReplenishment)
    };


    return (
        <form className={classes.replenishmentForm} onSubmit={handleSubmit}>
            {replenishmentItems.map((item, index) => (
                <div className={classes.item} key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.sku}</p>
                    {replenishment.confirmed_by ? <p>{item.confirmed_quantity}</p> : (
                        <PercentageInput
                            initialValue={item.proposed_quantity}
                            onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                        />
                    )}
                </div>
            ))}
            {!replenishment.confirmed_by && <button className={classes.button} type="submit">Podtvrdit</button>}
        </form>
    )
}
