import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export type Props = {}
export type OwnProps = {}

export type State = {
  menuOpen: boolean
}

class Nav extends React.Component<OwnProps & Props, State> {
    constructor() {
        super();
        this.state = {
            menuOpen: false
        };
    }

    toggleMenu() {
        const { menuOpen } = this.state;
        this.setState({menuOpen: !menuOpen});
    }

    renderMenuIcon() {
        const { menuOpen } = this.state;

        return(
          <div styleName={classNames('menuWrapper', {menuOpen})} onClick={() => this.toggleMenu()}>
            <div styleName="menuToggle">
              <input styleName="input" type="checkbox" />
              <span />
              <span />
              <span />
            </div>
          </div>
        );
    }

    renderHiddenMenu() {
        const { menuOpen } = this.state;
        return (
          <div styleName={classNames('hiddenMenu', {menuOpen})}>
            <Link styleName="hiddenItem" to="/">Home</Link>
            <Link styleName="hiddenItem hideLarge" to="/categories">Categories</Link>
            <Link styleName="hiddenItem" to="/rules">Rules</Link>
            <Link styleName="hiddenItem" to="/penalties">Penalties</Link>
            <Link styleName="hiddenItem hideLarge" to="/">Teams</Link>
          </div>
        );
    }

    render() {
        return (
            <div styleName="container">
              <div styleName="section hide"></div>
              <Link styleName="logoWrapper" to="/"><h1 styleName="logo section">Twisted™ Trivia™</h1></Link>
              <div styleName="section right">
                <Link to="/categories" styleName="menuItem">Categories</Link>
                <div styleName="menuItem">Teams</div>
                { this.renderMenuIcon() }
                { this.renderHiddenMenu() }
              </div>
            </div>
        );
    }
}

export default CSSModules(Nav, styles, {allowMultiple: true});
