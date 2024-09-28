import { createContext, useContext, useState} from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}){
    
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    );

    // const openCart =() => setCartIsOpen(true)
    // const closeCart = () => setCartIsOpen(false)

    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id){

        setCartItems(current => {
            if(current.find(item => item.id ===id) == null){
                return [...current, {id, quantity: 1}]
            }
            else{
                return current.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id){

        setCartItems(current => {
            if(current.find(item => item.id ===id)?.quantity === 1){
                return current.filter(item => item.id !== id)
            }
            else{
                return current.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){

        setCartItems(current => {
                return current.filter(item => item.id !== id)
            }
        )
    }

    return(
        <ShoppingCartContext.Provider value={{cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartIsOpen, setCartIsOpen}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}