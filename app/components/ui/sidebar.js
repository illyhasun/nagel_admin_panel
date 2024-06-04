'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import classes from './sidebar.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { data } from '../../DUMMY_DATA.JS';


export default function Sidebar() {

    const [projects, setProjects] = useState(false)

    const [pendingCount, setPendingCount] = useState(0);

    useEffect(() => {
        const count = data.filter(item => !item.confirmed_by).length;
        setPendingCount(count);
    }, []);


    return (
        <header className={classes.sidebar}>
                <div className={classes.userInfo}>
                    <Link href='/dashboard/profile' className={classes.avatar}>
                        <div className={classes.circle}></div>
                        <Image src='/images/icons/gear.svg' alt='icon' height={30} width={30} />
                    </Link>
                    <Link href='/dashboard/profile'><h5>Wade Warren</h5></Link>
                </div>
                <div className={classes.nav}>
                    <ul>
                        <li><Link href='/dashboard'><Image src='/images/icons/house-solid.svg' alt='icon' height={15} width={15} />Home</Link></li>
                        <li className={classes.notificationLink}><Link href='/dashboard/replenishment'>
                            <div><Image src='/images/icons/house-solid.svg' alt='icon' height={15} width={15} />Přehled provedených závozů</div>
                            {pendingCount > 0 && <span className={classes.notification}>{pendingCount}</span>}

                        </Link>
                        </li>
                        <li><Link href='#'><Image src='/images/icons/house-solid.svg' alt='icon' height={15} width={15} />Tracker</Link></li>
                        <li><Link href='#'><Image src='/images/icons/house-solid.svg' alt='icon' height={15} width={15} />Analystics</Link></li>
                    </ul>
                </div>
                <div className={classes.projects}>
                    <ul>
                        <li onClick={() => setProjects(!projects)} className={classes.dropdown}>
                            <div>
                                <Image src='/images/icons/list-solid.svg' height={15} width={15} alt='icon' />
                                My Projects
                            </div>
                            <Image src={`/images/icons/${projects ? 'arrow-up' : 'arrow-down'}.svg`} height={15} width={15} alt='icon' />
                        </li>
                        <li className={projects ? classes.dropdownMenuActive : classes.dropdownMenu}>
                            <ul>
                                <li><Link href='#'><div className={classes.littleCircle}></div>neco</Link></li>
                                <li><Link href='#'><div className={classes.littleCircle}></div>neco</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={classes.logout}>
                    <ul>
                        <li><Link href='#'><Image src='/images/icons/logout.svg' width={15} height={15} alt='icon' /> logout</Link></li>
                        <li><Link href='#'><Image src='/images/icons/logout.svg' width={15} height={15} alt='icon' /> help</Link></li>
                    </ul>
                </div>
        </header>
    )
}
