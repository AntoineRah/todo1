import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" role="status" variant='warning'>
        </Spinner>
    </div>
  )
}
