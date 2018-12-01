import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
// import Popup from '../popup/Popup';
// import Button from '../button/Button';
// import Horn from '../../__assets__/images/horn.svg';

// import { auth, provider } from '../../components/firebase/Firebase';

export type Props = {}

export type OwnProps = {
}

class Nav extends React.Component<OwnProps & Props> {
    constructor() {
        super();
    }

    render() {
        return (
            <div styleName="container">
              <div styleName="section"></div>
              <Link styleName="logoWrapper" to="/"><h1 styleName="logo section">Twisted™ Trivia™</h1></Link>
              <div styleName="section"></div>
            </div>
        );
    }
}

export default CSSModules(Nav, styles, {allowMultiple: true});
