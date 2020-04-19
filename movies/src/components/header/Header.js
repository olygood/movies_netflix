import React, {Component} from 'react'


export default class Header extends Component{
    render(){
        return(
            <header className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand"href="/">AlloMovies</a>
                    <button className="navbar-toggler">
                        <span className="navbar-toglgler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link"href="/">HOME</a>
                                                 </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link"href="/">Favoris</a>
                                                            </li>
                                                                </ul>
                                                                    </div>
                                                                        </header>
        )
    }
}
