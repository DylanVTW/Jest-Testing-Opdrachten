import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });

    // TODO: Render SearchBar
    // TODO: Vind de input (Hint: screen.getByPlaceholderText('Zoek...'))
    // TODO: Type tekst in input (Hint: fireEvent.change(input, { target: { value: 'React' } }))
    // TODO: Check of input.value 'React' is
    expect(input.value).toBe('React'); // Deze test faalt! Vervang met je eigen test
  });

  test('toont zoekterm onder de input', () => {
    render(<SearchBar/>);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Jest' } });

    // TODO: Render SearchBar
    // TODO: Type 'Jest' in de input
    // TODO: Check of "Zoeken naar: Jest" op het scherm staat
    expect(screen.getByText('Zoeken naar: Jest')).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont wissen button als er tekst is', () => {
    render(<SearchBar/>);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, {target: { value: 'Testing' } });
    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Check of button met tekst "Wissen" verschijnt
    expect(screen.getByText('Wissen')).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('wissen button maakt input leeg', () => {
    render(<SearchBar/>);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Testing' } });
    const button = screen.getByText('Wissen');
    fireEvent.click(button);
    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Klik op "Wissen" button
    // TODO: Check of input leeg is (value = '')
    expect(input.value).toBe(''); // Deze test faalt! Vervang met je eigen test
  });

});
