import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import Modal from 'react-modal'

import './App.css'
import Crediario from './Crediario'

const customStyles = {
  content: {
    /*  top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)', */
    width: '90%',
  },
}

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div
        className='App'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <button
          style={{
            width: '100px',
          }}
          onClick={openModal}
        >
          CONTRATO
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <PDFViewer width={'100%'} height={1000}>
            <Crediario nome={'Jucelino'} />
          </PDFViewer>
        </Modal>
      </div>
    </>
  )
}

export default App
