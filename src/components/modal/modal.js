import React, { useContext } from 'react'
import { props } from '../../App'

const Modal = () => {
const {closeModal} = useContext(props)
  return (
    <div className='modal'>
        <div classNameName="modal modal-alert position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalChoice">
  <div className="modal-dialog" role="document">
    <div className="modal-content rounded-3 shadow">
      <div className="modal-body p-4 text-center">
        <h5 className="mb-0">Enable this setting?</h5>
        <p className="mb-0">You can always change your mind in your account settings.</p>
      </div>
      <div className="modal-footer flex-nowrap p-0">
        <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"><strong>Yes, enable</strong></button>
        <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal"
        onClick={closeModal}
        >close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal