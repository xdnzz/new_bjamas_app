import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';
import { BuyButton } from '../buyButton/BuyButton';

export function Header(){
    return (
       <>
        <header className="py-9 flex justify-between">
            <img src={Logo} alt="Logo Bejamas"  className="w-28"/>
            <img src={Cart} alt="Cart Items" className="w-7" />
            
        </header>
        <div className="bg-slate-300 w-full h-0.5"></div>
       </>
    )
}