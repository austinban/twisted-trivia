import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Card extends React.Component<> {
    static propTypes = {
        item: PropTypes.object.isRequired,
        user: PropTypes.object
    }

    // Render
    render() {
        return (
            <div styleName="container">
              <div styleName="body">Yep</div>
            </div>
        );
    }
}

export default CSSModules(Card, styles, {allowMultiple: true});
