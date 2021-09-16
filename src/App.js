import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'

import './App.css'
import Crediario from './Crediario'

function App() {
  return (
    <>
      <PDFViewer width={'100%'} height={1000}>
        <Crediario nome={'Jucelino'} />
      </PDFViewer>
    </>
  )
}

export default App
