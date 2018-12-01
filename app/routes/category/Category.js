import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import QuestionSet from '../../components/questionSet/QuestionSet';
import { getQuestionSet } from '../../lib/questions';

export type Props = {}

export type OwnProps = {}

export type State = {
  currentSet: string | null,
}

class Category extends React.Component<OwnProps & Props, State> {
    constructor() {
        super();
        this.state = {
            currentSet: null,
        };
        this.setCategory = this.setCategory.bind(this);
    }

    componentDidMount() {
        this.setCategory();
    }

    setCategory = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('set');
        this.setState({currentSet: category});
    }

    renderQuestionSet() {
        const { currentSet } = this.state;

        if(currentSet === '90')return <QuestionSet title="90's Pop Trivia" questions={getQuestionSet('pop')} />;
        if(currentSet === 'current')return <QuestionSet title="Current Events Trivia" questions={getQuestionSet('current')} />;
        if(currentSet === 'film')return <QuestionSet title="Film Trivia" questions={getQuestionSet('film')} />;
        if(currentSet === 'nashville')return <QuestionSet title="Nashville Trivia" questions={getQuestionSet('nashville')} />;
        if(currentSet === 'conspiracy')return <QuestionSet title="Conspiracy Theory Trivia" questions={getQuestionSet('conspiracy')} />;
        if(currentSet === 'tickle')return <QuestionSet title="Tickle Theory Trivia" questions={getQuestionSet('tickle')} />;

        return <div>Category not found</div>;
    }

    render() {
        return (
            <div styleName="wrapper">
              {this.renderQuestionSet()}
            </div>
        );
    }

}

export default CSSModules(Category, styles, {allowMultiple: true});
