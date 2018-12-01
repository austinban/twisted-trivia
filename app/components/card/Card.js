import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import firebase from '../firebase/Firebase';

class Card extends React.Component<> {
    static propTypes = {
        item: PropTypes.object.isRequired,
        user: PropTypes.object
    }

    // Functions
    removeStory(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }

    // Render
    render() {
        const { item } = this.props;

        return (
            <div styleName="container" key={item.id}>
              <div styleName="body">{item.age}</div>
            </div>
        );
    }
}

export default CSSModules(Card, styles, {allowMultiple: true});
