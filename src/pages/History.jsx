import React from 'react'

const History = () => {
  return (
    <div>
     <div style={{backgroundColor:'purple', padding: '40px 0' }}>
        <h1 className="text-light text-center mb-4">My History</h1>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>Author</th>
            <th>Time Stamp</th>
            <th>Status</th>
            <th>...</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Crystal Moth Conspiracy</td>
              <td>Konn Lavery</td>
              <td>9/11/2024, 11:53:43 AM GMT+S:30</td>
              <td>Download</td>
              <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>The Unveiling</td>
              <td>Tamara Leigh</td>
              <td>27/11/2024, 12:27:43 AM GMT+S:30</td>
              <td>Read via Online</td>
              <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>

          </tbody>
          </table> 

    </div>
  )
}

export default History
