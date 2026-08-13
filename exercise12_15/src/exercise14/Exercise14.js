import React from 'react'
import { CartProvider } from './context/CartContext'
import DishesList from './components/DishesList'
import Cart from './components/Cart'
import { ThemeProvider } from './context/ThemeContext'
import ThemeComponent from './components/ThemeComponent'

const Exercise14 = () => {
    return (
        <div>
            <CartProvider>
                <DishesList />
                <Cart />
            </CartProvider>
            <ThemeProvider>
                <ThemeComponent />
            </ThemeProvider>
        </div>
    )
}

export default Exercise14
