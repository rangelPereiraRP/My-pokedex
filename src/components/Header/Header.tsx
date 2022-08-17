import React from 'react';
import './styles.scss'
import pokeLogo from '../../assets/pokemon_logo.png'
import searchIcon from '../../assets/search_icon.png'
import Filters from './components/Filters';
import Minicart from './components/minicart';
import { useHooks } from '../../core';

const Header: React.FC = () => {
    const { openMinicart, setOpenMinicart } = useHooks()

    return (
        <div>
            <div className="header">
                <img src={pokeLogo} alt='Pokedex Logo' className='header__logo' />
                <div className='header__searchbar'>
                    <input className='header__searchbar__input' type='text' />
                    <button className='header__searchbar__button'>
                        <img className='search-icon' alt='Buscar Pokémon' src={searchIcon} />
                    </button>
                </div>
                <div className='header__pokedex'>
                    <button className='header__pokedex__btn'>
                        {/* <img className='pokedex-icon' alt="Icone da Pokedéx" src={pokedexIcon} /> */}
                    </button>
                </div>
                <div onClick={() => setOpenMinicart(!openMinicart)} className='header__minicart__button'>
                    Abrir
                </div>
                <Minicart />
            </div>
            <Filters />
        </div>
    );
}

export default Header;