import React from 'react';
import styles from './styles.scss';
import Routes from '../../routes';
import CSSModules from 'react-css-modules';
import Nav from '../../components/nav/Nav';

export type Props = {}
export type OwnProps = {}

class App extends React.Component<OwnProps & Props> {

    render() {
        return (
          <div styleName="container">
            <Nav/>
            { Routes }
          </div>
        );
    }

}

export default CSSModules(App, styles, {allowMultiple: true});
