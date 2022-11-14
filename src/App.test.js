import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App'

test('renders App', () => {
  render(<App />)
  const resultsHeader = screen.getByText(/Resultado de busca/i)
  expect(resultsHeader).toBeInTheDocument()
})

test('Buttons should show features not implemented messages', async () => {
  render(<App />)

  fireEvent.click(screen.getByText('Novo Card'))

  await screen.findByRole('alert')

  expect(screen.getByRole('alert')).toHaveTextContent('Funcionalidade ainda não implementada!')
})

test('App should render poke items list', async () => {
  render(<App />)

  await screen.findAllByTestId('search-result-card')

  expect(screen.getAllByTestId('search-result-card')).toHaveLength(20)
})
