import { useState } from 'react'
import { Button, Spinner, Alert } from 'vtex.styleguide'
import { useGetCookiesFortune } from './Hooks/useGetCookiesFortune'
import styles from './CustomShowCookiesFortune.css'

const CustomShowCookiesFortune = () => {
  const [selectedFortune, setSelectedFortune] = useState('')
  const [luckyNumber, setLuckyNumber] = useState('')
  const [isLoadingFortune, setIsLoadingFortune] = useState(false)

  const { data, loading, error } = useGetCookiesFortune()

  const generateLuckyNumber = () => {
    const part1 = Math.floor(Math.random() * 100).toString().padStart(2, '0')
    const part2 = Math.floor(Math.random() * 100).toString().padStart(2, '0')
    const part3 = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return `${part1}-${part2}-${part3}`
  }

  const getRandomFortune = () => {
    if (!data || data.length === 0) {
      return "No hay frases disponibles"
    }

    const fortunes = data?.map(item => item?.CookieFortune).filter(fortune => fortune && fortune?.trim() !== "")

    if (fortunes.length === 0) {
      return "No hay frases disponibles"
    }

    const randomIndex = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomIndex]
  }

  const handleGetFortune = async () => {
    setIsLoadingFortune(true)

    setTimeout(() => {
      const randomFortune = getRandomFortune()
      const randomLuckyNumber = generateLuckyNumber()

      setSelectedFortune(randomFortune)
      setLuckyNumber(randomLuckyNumber)
      setIsLoadingFortune(false)
    }, 300)
  }

  if (loading) return (
    <div className={`${styles.custom_show_cookies_fortune}`}>
      <div className={`${styles.spinner_container}`}>
        <div className={`${styles.neumorphic_spinner}`}></div>
      </div>
    </div>
  )

  if (error) return (
    <div className={`${styles.custom_show_cookies_fortune}`}>
      <Alert type="error">Error cargando las frases de la fortuna: {error}</Alert>
    </div>
  )

  return (
    <section className={`${styles.custom_show_cookies_fortune}`}>
      <div className={`${styles.message_fortune_and_lucky_number}`}>
        {isLoadingFortune && (
          <div className={`${styles.spinner_container}`}>
            <div className={`${styles.neumorphic_spinner}`}></div>
          </div>
        )}

        {selectedFortune && !isLoadingFortune && (
          <div className={`${styles.fade_in}`}>
            <h3>
              {selectedFortune}
            </h3>
          </div>
        )}

        {luckyNumber && !isLoadingFortune && (
          <div className={`${styles.fade_in}`}>
            <h5>
              Tu número de la suerte: {luckyNumber}
            </h5>
          </div>
        )}

        {!selectedFortune && !isLoadingFortune && (
          <div className={`${styles.fade_in}`}>
            <h3>
              ¡Haz clic en el botón para descubrir tu fortuna!
            </h3>
          </div>
        )}
      </div>

      <div className={`${styles.container_custom_show_cookies_fortune_button}`}>
        <button
          className={`${styles.custom_show_cookies_fortune_button}`}
          onClick={handleGetFortune}
          disabled={isLoadingFortune}
        >
          {isLoadingFortune ? 'Obteniendo tu fortuna...' : 'Obtener Frase de la Fortuna'}
        </button>
      </div>
    </section>
  )
}

export default CustomShowCookiesFortune
