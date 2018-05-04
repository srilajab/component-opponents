import React from 'react'

const Villain = ({ villain }) => {
  return (
    <div className="card d-inline-block w-25 mx-4 my-2">
      <img className="card-img-top img-fluid" src={ villain.imageUrl } alt={ villain.name } />
      <div className="card-body">
        <h5 className="card-title">{ villain.name }</h5>
        <p className="card-text">{ villain.description }</p>
      </div>
    </div>
  )
}

export default Villain