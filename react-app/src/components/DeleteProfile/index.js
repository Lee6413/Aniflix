import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAvatarsThunk } from '../../store/avatars'
import { deleteProfileThunk } from '../../store/profiles';
import styles from './DeleteProfile.module.css'
import { toggleModalView } from '../../store/session';

export default function DeleteProfile() {
  const dispatch = useDispatch();
  let data = useSelector(state => state.session.passingData)
  const history = useHistory();
  const [id] = useState(data.id)

  useEffect(() => {
    dispatch(getAvatarsThunk())
  }, [dispatch])

  const handleDelete = async (e) => {
    e.preventDefault();


    const profileData = {
      id: id
    };

    const data = dispatch(deleteProfileThunk(profileData));
    if (data) {
      history.push('/whos-watching')
      dispatch(toggleModalView(false))

    }
  };

  const closeModal = async () => {
    dispatch(toggleModalView(false))
  };

  return (
    <>
      <div id={styles.main}>
        <div id={styles.heading}>
          Delete profile?
        </div>
        <div id={styles.warning}>
          This profile's history - including Watchlist - will be gone forever, and you won't be able to access it again.
        </div>
        <div id={styles.buttonDiv}>
          <div id={styles.cancelButton} onClick={closeModal}>
            CANCEL
          </div>
          <div id={styles.deleteButton} onClick={handleDelete}>
            DELETE
          </div>
        </div>
      </div>
    </>
  );
}
