import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

export type Props = {}

export type OwnProps = {}

class Footer extends React.Component<OwnProps & Props> {
    constructor() {
        super();
    }

    render() {
        return (
          <div styleName="footer">
            <div>
              <Link styleName="minorLink" to={'/rules'}>Rules</Link>
              <Link styleName="minorLink" to={'/penalties'}>Penalties</Link>
            </div>
            <div styleName="footerText">© Twisted Trivia 2018</div>
          </div>
        );
    }
}

export default CSSModules(Footer, styles, {allowMultiple: true});
