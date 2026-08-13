import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

export default function ThemeComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container 
      fluid 
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <Button 
        variant="light" 
        className="px-4 py-2 border shadow fs-4"
        onClick={toggleTheme}
        style={{ backgroundColor: theme.background, color: theme.foreground, borderColor: theme.foreground }}
      >
        Toggle Theme
      </Button>
    </Container>
  );
}