import AlertBox from './components/AlertBox/AlertBox'

function App() {

  return (
    <>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed')}>
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>

      <AlertBox
        type="error"
        message="There has been an error updating your profile!"
        onClose={() => alert('Alert closed')} >
        <p className="text-sm">Please try again.</p>
      </AlertBox>
    </>
  )
}

export default App
