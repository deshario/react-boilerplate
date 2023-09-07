import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import Modal from '@components/Modal'
import Button from '@components/Button'
import useTheme from '@hooks/useTheme'

function App() {
  const theme = useTheme()

  return (
    <>
      <h1>Theme: {theme}</h1>
      <img src={viteLogo} alt='Vite logo' />
      <img src={reactLogo} alt='React logo' />
      <Modal />
      <Button />
    </>
  )
}

export default App
