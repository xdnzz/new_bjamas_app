import Logo from '../../assets/logo.svg';
import Cart from '../../assets/cart.svg';

export function Header(){
    return (
        <header className="py-4 bg-slate-400 flex justify-between">
            <img src={Logo} alt="Logo Bejamas" />
            <img src={Cart} alt="Cart Items" />
        </header>
    )
}