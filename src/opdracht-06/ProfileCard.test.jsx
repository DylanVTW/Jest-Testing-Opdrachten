import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30}/>);
    const ageText = screen.getByText('Leeftijd: 30');
    // TODO: Render ProfileCard met name="Piet" en age={30}
    // TODO: Check of tekst "Leeftijd: 30" op het scherm staat
    // Hint: gebruik screen.getByText()
    expect(ageText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont bio als die er is', () => {
    render(<ProfileCard name="Klaas" age={40} bio={"Ik hou van programmeren"}/>);
    const bioText = screen.getByText('Ik hou van programmeren');
    // TODO: Render ProfileCard met bio="Ik hou van programmeren"
    // TODO: Check of die tekst op het scherm staat
    expect(bioText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Sophie" age={22}/>);
    const fallbackText = screen.getByText('Geen bio beschikbaar');
    // TODO: Render ProfileCard ZONDER bio prop
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
    expect(fallbackText).toBeInTheDocument(); // Deze test faalt! Vervang met je eigen test
  });

});
