import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

export type Props = {}

export type OwnProps = {}

class Rules extends React.Component<OwnProps & Props> {

    render() {
        return (
          <div styleName="rules">
            <div styleName="listHeader">The Rules</div>
            <ul styleName="list">
              <li>There are 5 rounds of 10 questions each</li>
              <li>Each question is worth 1 point unless otherwise specified</li>
              <li>You’ll have 30 seconds to decide on an answer</li>
              <li>At the end of each round, each team has to choose from a Twist™</li>
              <li>Each round, each team gets 3 Twists™ (described below).</li>
              <li>The team that wins the most rounds at the end wins the game</li>
            </ul>
            <div styleName="listHeader">The Twists</div>
            <ul styleName="list">
              <li>Before a question is shown, you get to pick one person from the other team, and they are the only one able to guess the next question</li>
              <li>Before a question is shown, you may choose to reduce the time the other team has to guess from 30 to 10 seconds</li>
              <li>You can phone a friend for an answer</li>
            </ul>
            <Link styleName="button" to={'/'}>Back</Link>
          </div>
      );
    }

}
export default CSSModules(Rules, styles, {allowMultiple: true});
