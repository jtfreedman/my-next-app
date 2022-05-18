import Link from 'next/link'

import classes from '../../styles/MainNavigation.module.css';
//import FavoritesContext from '../../store/favorites-context';

function MainNavigation()
{
    //const favContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>myWatches</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/all-watches'>All Watches</Link>
                    </li>
                    <li>
                        <Link href='/new-watch'>Add New Watch</Link>
                    </li>
                    <li>
                        <Link href='/favorites'>My Favorites</Link>
                    </li>
                </ul>  
            </nav>
        </header>
    );
}

export default MainNavigation;