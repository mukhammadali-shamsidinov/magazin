import { Button } from 'reactstrap'
import React from 'react'
import { Table } from 'reactstrap'
import Sidebar from '../sidebar/sidebar'

const Price = () => {
  return (
    <div className='container w-75 m-auto'>
        <Sidebar />
        <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Avatar
      </th>
      <th>
        name
      </th>
      <th>
        price
      </th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        avatar
      </td>
      <td>
        nintendo switch
      </td>
      <td>
      <span class="badge bg-success">300$</span>
      </td>
      <td>
      <button className='btn btn-outline-danger'>
            remove
        </button>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        avatar
      </td>
      <td>
        nintendo switch
      </td>
      <td>
      <span class="badge bg-success">300$</span>
      </td>
     <td>
     <button className='btn btn-outline-danger'>
            remove
        </button>
     </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        avatar
      </td>
      <td>
        nintendo switch
      </td>
      <td>
      <span class="badge bg-success">300$</span>
      </td>
      <td>
      <button className='btn btn-outline-danger'>
            remove
        </button>
      </td>
    </tr>

  </tbody>
</Table>
<hr />
<div className='d-flex align-items-center justify-content-end'>
<div className="btn-group">
<button className='px-5 btn btn-outline-dark' >Completed</button><span className='
btn btn-dark
font-bold fs-4 badge '>3000$</span>
</div>

</div>

    </div>
  )
}

export default Price