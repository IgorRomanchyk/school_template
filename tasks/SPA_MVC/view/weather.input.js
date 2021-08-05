/* eslint-disable import/prefer-default-export */
export function renderForm() {
  const container = document.querySelector('.container')
  const weatherForm = document.createElement('div')
  weatherForm.className = 'weather_form'

  const inputCity = document.createElement('input')
  inputCity.type = 'text'
  inputCity.name = 'city'
  inputCity.placeholder = 'Enter your city here...'

  const inputCountry = document.createElement('input')
  inputCountry.type = 'text'
  inputCountry.name = 'country'
  inputCountry.placeholder = 'Enter your country here...'

  const buttonCreate = document.createElement('button')
  buttonCreate.innerText = 'Submit'
  buttonCreate.className = 'weather_submit'

  const weatherError = document.createElement('div')
  weatherError.className = 'weather_error'
  weatherError.innerText = 'Error. Please fill in both lines'

  weatherForm.append(inputCity, inputCountry, buttonCreate)
  container.append(weatherForm, weatherError)
}
