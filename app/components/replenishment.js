'use client'
import { useState } from 'react';
import classes from './replenishment.module.css'
import ReplenishmentDetail from './replenishmentDetail';
import Overlay from './ui/overlay';
import Close from './ui/close';

export default function Replenishment() {
    const [replenishment, setReplenishment] = useState()

    const replenishments = [
        { id: 1, name: 'Replenishment 1', status: 'completed', confirmedBy: 'User A', confirmationTime: '2024-05-27 14:30' },
        { id: 2, name: 'Replenishment 2', status: 'completed', confirmedBy: 'User B', confirmationTime: '2024-05-26 10:15' },
        { id: 3, name: 'Replenishment 3', status: 'pending' },
    ]

    return (
        <>
            <div className={classes.replenishmentContainer}>
                <h1>Přehled provedených závozů</h1>
                <ul className={classes.replenishmentList}>
                    {replenishments.map((item) => (
                        <li
                            key={item.id}
                            className={`${classes.replenishmentItem} ${item.status === 'pending' ? classes.highlight : ''}`}
                            onClick={() => setReplenishment(item)}
                        >
                            {item.name}
                            {item.status === 'pending' && <span className={classes.notificationLabel}>Čeká na potvrzení</span>}
                        </li>
                    ))}
                </ul>
            </div>
            {replenishment && (
                <>
                    <ReplenishmentDetail stingifyReplenishment={JSON.stringify(replenishment)} />
                    <div onClick={() =>setReplenishment(null)}><Overlay /></div>
                    <div onClick={() =>setReplenishment(null)}><Close/></div>
                </>
            )}

        </>

    );
};