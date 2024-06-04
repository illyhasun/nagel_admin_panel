'use client'
import { useState } from 'react';
import Image from 'next/image';

import ReplenishmentList from './replenishmentList';
import ReplenishmentDetail from './replenishmentDetail';

import classes from './replenishment.module.css';

export default function Replenishment() {
    const [replenishment, setReplenishment] = useState();

    return (
        <>
            <div className={classes.replenishmentContainer}>
                <h1 className={classes.replenishmentTitle}><div><Image height={20} width={20} src='/images/icons/boxes-packing.svg' alt='icon' /></div> Přehled provedených závozů</h1>
                <ReplenishmentList setReplenishment={setReplenishment} />
            </div>
            {replenishment && (
                <>
                    <ReplenishmentDetail stingifyReplenishment={JSON.stringify(replenishment)} />
                    <Image className={classes.close} onClick={() => setReplenishment(null)} src='/images/icons/close.svg' alt='close' height={30} width={30} />
                    <div className={classes.overlay} onClick={() => setReplenishment(null)}></div>
                </>
            )}
        </>
    );
}
