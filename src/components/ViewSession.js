import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
function ViewSession() {
  let params = useParams();
  return (
    <div>{params.code}</div>
  )
}

export default ViewSession