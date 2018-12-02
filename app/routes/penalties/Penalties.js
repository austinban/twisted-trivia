import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

export type Props = {}

export type OwnProps = {}

class Penalties extends React.Component<OwnProps & Props> {

    render() {
        return (
          <div styleName="rules">
            <div styleName="listHeader">The Penalties</div>
            <ul styleName="list">
              <li>Spicy cookies</li>
              <li>Nickelback karaoke</li>
              <li>20 seconds freestyle</li>
              <li>Instagram a selfie with a caption of our choice (must be up for 24 hours)</li>
            </ul>
            <Link styleName="button" to={'/'}>Back</Link>
          </div>
      );
    }

}
export default CSSModules(Penalties, styles, {allowMultiple: true});
