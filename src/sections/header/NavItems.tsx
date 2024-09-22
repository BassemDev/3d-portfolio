// External NPM module import
import React from 'react';

// Intern project import
import { NAV_ITEM_LABELS } from '../../constants/navbar';

export const NavItems: React.FC = () => {
    return (
        <ul className='nav-ul'>
            {
                NAV_ITEM_LABELS.map((val, index) =>
                    <li className='nav-li' key={index}>
                        <a href={val.href} className='nav-li_a' onClick={() => console.log("navBar clicked")}>{val.label}</a>
                    </li>
                )
            }
        </ul>
    )
}