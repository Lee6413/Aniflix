import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import styles from './ShowVideo.module.css'
import { getOneShowThunk } from '../../store/shows';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

export default function ShowVideo() {
  const dispatch = useDispatch();
  const { id } = useParams()

  // dispatch for shows
  useEffect(() => {
    dispatch(getOneShowThunk(id))
  }, [dispatch, id])
  const show = useSelector(state => state?.shows)

  return (
    <div id={styles.page}>
      <ReactPlayer id={styles.player} width='100%' height='100%' controls='true' playing='true' url={`${show?.video_url}`} />
    </div>
  );
}
