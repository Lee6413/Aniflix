import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Watchlist.module.css';
import { addModal, toggleModalView, passData } from '../../store/session';
import FormModal from '../Modal';
import { getWatchlistsThunk } from '../../store/watchlist';


export default function Watchlist() {
  const sessionUser = useSelector(state => state.session.user);
  const profileId = localStorage?.getItem('profile')
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);

  const modalView = useSelector(state => state?.session?.modalView)



  useEffect(() => {
    dispatch(getWatchlistsThunk(profileId))
  }, [dispatch, profileId])

  const watchlistsObj = useSelector(state => state?.watchlists)
  const watchlistsArr = Object?.values(watchlistsObj)


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = (e) => {
    e.preventDefault()
    setShowMenu(false)
  }

  // maybe make a delete modal and an edit modal?
  const createModal = (e) => {
    e.preventDefault()
    const data = {
      id: profileId
    }
    dispatch(addModal("addWatchlist"))
    dispatch(toggleModalView(true))
    dispatch(passData(data))
  }

  const deleteModal = (e, id) => {
    e.preventDefault()

    const data = {
      id
    }
    dispatch(addModal("deleteProfile"))
    dispatch(toggleModalView(true))
    dispatch(passData(data))
  }

  return (
    <>
      <div id={styles.page}>
        <div id={styles.midContainer}>
          <div id={styles.whosDiv}>
            <span id={styles.whosText}>Watchlists</span>
          </div>
          <div id={styles.profileContainer}>
            {watchlistsArr.map((watchlist) => {
              return (
                // (sessionUser.id === profile.user_id) && (
                <div key={watchlist.id} className={styles.profileDiv}>
                  {watchlist?.shows.length > 0 ? (
                    <NavLink to={`/watchlists/${watchlist.id}`}>
                      <div id={styles.profilePic} style={{ backgroundImage: `url(${watchlist?.shows['0']?.thumbnail_url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                    </NavLink>
                  ) : (
                    <NavLink id={styles.navLink} to={`/watchlists/${watchlist.id}`}>
                      <div id={styles.profilePic}>
                        <span>Start Adding!</span>
                      </div>
                    </NavLink>
                  )
                  }
                  <div id={styles.profileName}>
                    {watchlist.name}
                  </div>
                </div>
                // )
              )
            }

            )}
            <div className={styles.profileDiv}>
              <div id={styles.profilePic} onClick={(e) => { createModal(e) }} style={{ backgroundImage: `url(https://i.ibb.co/2tnCP4M/rough-draft-plus.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                {/* Add Watchlist modal onclicker here */}
              </div>
              <div id={styles.profileName}>
                Add Watchlist
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalView ? (<FormModal />) : null}
    </>
  );
}
