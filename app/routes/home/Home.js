import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

export type Props = {}
export type OwnProps = {}
export type State = {}

class Home extends React.Component<OwnProps & Props, State> {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div styleName="wrapper">
              <div styleName="cards">
                <div styleName="header">Welcome to Twisted Trivia™</div>
              </div>
              <div styleName="large">
                <div styleName="subheader">Pick your category to get started</div>
                <div styleName="categories">
                  <Link styleName="card" to={'/category?set=90'}>90's Trivia</Link>
                  <Link styleName="card" to={'/category?set=current'}>Current Events</Link>
                  <Link styleName="card" to={'/category?set=film'}>Film</Link>
                  <Link styleName="card" to={'/category?set=nashville'}>Nashville</Link>
                  <Link styleName="card" to={'/category?set=conspiracy'}>Conspiracy Theories</Link>
                  <Link styleName="card" to={'/category?set=tickle'}>Tickle Theories</Link>
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}

export default CSSModules(Home, styles, {allowMultiple: true});
