
import './App.css'
import AlertBox from './components/AlertBox/AlertBox'

function App() {

  return (
    <>
      <AlertBox type={'success'} message={'Message Received!'} />
      <AlertBox type={'error'} message={'Undefined!' }/>
    </>
  )
}

export default App
