import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import firebase from '../firebase/Firebase';
import Button from '../button/Button';

export type Props = {}

export type OwnProps = {
  user: Object
}

class Popup extends React.Component<OwnProps & Props> {
    static propTypes = {
        user: PropTypes.object,
    }

    constructor() {
        super();
        this.state = {
            age: '',
            formOpen: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { age } = this.state;
        const itemsRef = firebase.database().ref('items');
        const item = {
            age: age
        };
        itemsRef.push(item);
        this.setState({
            age: ''
        });
    }

    toggleForm() {
        this.setState({formOpen: !this.state.formOpen});
    }


    render() {
        const { age } = this.state;
        const popupClasses = classNames('popup-wrapper', this.state.formOpen ? '' : 'hidden');
        const storyLength = age.length;
        return(
            <div>
              <Button text="Write a story" onClick={() => this.toggleForm()}/>
              <div styleName={popupClasses}>
                <div styleName="popup">
                  <div styleName="close-icon" onClick={() => this.toggleForm()}>X</div>
                  <form styleName="form" onSubmit={this.handleSubmit}>
                    <h1 styleName="popup-header">Today, I am grateful for...</h1>
                    <input type="text" name="age" placeholder="What are you grateful for?" onChange={this.handleChange} value={age} maxLength="750" />
                    <div styleName={storyLength === 750 ? 'red' : ''}>{storyLength} / 750</div>
                    <Button text="Submit story" grey disabled={storyLength === 0} onClick={() => this.toggleForm()} />
                  </form>
                </div>
              </div>
            </div>
        );
    }
}

export default CSSModules(Popup, styles, {allowMultiple: true});
