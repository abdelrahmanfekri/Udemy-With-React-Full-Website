import React from 'react'
import style from '../index.module.css'
import Svg from './Svg';
export default function Need({ course }) {
    return (
      <div className={style.widthRes}>
        <div className="border ps-3 py-3 mt-3 border-2">
          <h5>What you'll learn</h5>
          <div className="d-flex row">
            {course[0].objectives_summary.map((obj) =>
              <div key={obj} className="col-12 col-md-6 col-lg-3">
                <Svg svg="checkIcon"></Svg>
                <small>{obj}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }