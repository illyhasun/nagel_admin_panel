'use client'

import Image from 'next/image'
import classes from './sidebar.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Sidebar() {

    const [projects, setProjects] = useState(false)


    return (
        <header className={classes.sidebar}>
            <div>
                <div className={classes.userInfo}>
                    <Link href='/dashboard/profile' className={classes.avatar}>
                        <div className={classes.circle}></div>
                        <Image src='/images/icons/gear.svg' alt='home' height={30} width={30} />
                    </Link>
                    <Link href='/dashboard/profile'><h5>Wade Warren</h5></Link>
                </div>
                <div className={classes.nav}>
                    <ul>
                        <li><Link href='/dashboard'><Image src='/images/icons/house-solid.svg' alt='home' height={15} width={15} /> Home</Link></li>
                        <li><Link href='#'><Image src='/images/icons/house-solid.svg' alt='home' height={15} width={15} />Inbox</Link></li>
                        <li><Link href='#'><Image src='/images/icons/house-solid.svg' alt='home' height={15} width={15} />Tracker</Link></li>
                        <li><Link href='#'><Image src='/images/icons/house-solid.svg' alt='home' height={15} width={15} />Analystics</Link></li>
                    </ul>
                </div>
                <div className={classes.projects}>
                    <ul>
                        <li onClick={() => setProjects(!projects)} className={classes.dropdown}>
                            <div>
                                <Image src='/images/icons/list-solid.svg' height={15} width={15} alt='menu' />
                                My Projects
                            </div>
                            <Image src={`/images/icons/${projects ? 'arrow-up' : 'arrow-down'}.svg`} height={15} width={15} alt='menu' />
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
                        <li><Link href='#'><Image src='/images/icons/logout.svg' width={15} height={15} /> logout</Link></li>
                        <li><Link href='#'><Image src='/images/icons/logout.svg' width={15} height={15} /> help</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
