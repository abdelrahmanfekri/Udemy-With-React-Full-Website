import React from 'react'
import style from '../index.module.css'

export default function Need({ course }) {
    return (
      <div className={style.widthRes}>
        <div className="border ps-3 py-3 mt-3 border-2">
          <h5>What you'll learn</h5>
          <div className="d-flex row">
            {course[0].objectives_summary.map((obj) =>
              <div key={obj} className="col-12 col-md-6 col-lg-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
                <small>{obj}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }