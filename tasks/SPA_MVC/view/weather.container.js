export function renderWeatherContainer() {
  const container = document.querySelector('.container')
  const weatherContainer = document.createElement('div')
  weatherContainer.id = 'weather_container'
  container.append(weatherContainer)
}
