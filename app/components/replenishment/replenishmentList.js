import { data } from '../../DUMMY_DATA.JS'

import classes from './replenishmentList.module.css'

export default function ReplenishmentList({ setReplenishment }) {
    return (
        <ul className={classes.replenishmentList}>
            {data.map((item) => (
                <li
                    key={item.id}
                    className={`${classes.replenishmentItem} ${item.status === 'pending' ? classes.highlight : ''}`}
                    onClick={() => setReplenishment(item)}
                >
                    {`${item.store_name} - ${item.replenishment_date}`}
                    {!item.confirmed_by && <span className={classes.notificationLabel}>Čeká na potvrzení</span>}
                </li>
            ))}
        </ul>
    );
}
