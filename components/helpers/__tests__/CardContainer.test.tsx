import { CardContainer } from '../../CardContainer'
import { render, screen } from '@testing-library/react'

describe('CardContainer', () => {
  const props = {
    cards: [
      {
        header: 'Card 1',
        description: 'Description for Card 1',
        link: 'https://example.com/card1'
      },
      {
        header: 'Card 2',
        description: 'Description for Card 2',
        link: 'https://example.com/card2'
      }
    ]
  }
  it('Return the correct number of cards', () => {
    render(<CardContainer {...props} />)
    const cards = screen.getAllByLabelText('card')
    expect(cards.length).toEqual(props.cards.length)
  })
})
