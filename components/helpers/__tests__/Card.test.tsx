import { Card } from '../../Card'
import { render, screen } from '@testing-library/react'

describe('Test Card Component Render', () => {
  const props = {
    header: 'Example Header',
    description: 'Example description',
    link: 'https://example.com'
  }

  it('renders the correct content', () => {
    render(<Card {...props} />)
    expect(screen.getByRole('heading')).toHaveTextContent('Example Header')
    expect(screen.getByText('Example description')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
  })
})
