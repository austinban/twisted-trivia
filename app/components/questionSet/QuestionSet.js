import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import Button from '../button/Button';
import classNames from 'classnames';
export type Props = {}

export type OwnProps = {
  questions: Array<Object>,
  title: string,
}

export type State = {
  questionIndex: number,
  seconds: number,
  showAll: boolean,
  showAnswer: boolean,
  showLanding: boolean,
}

class QuestionSet extends React.Component<OwnProps & Props, State> {
    static propTypes = {
        questions: PropTypes.array,
        title: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            questionIndex: 0,
            seconds: 0,
            showAll: false,
            showAnswer: false,
            showLanding: true,
        };
        this.setTime = this.setTime.bind(this);
        this.toggleAnswer = this.toggleAnswer.bind(this);
        this.toggleShowAll = this.toggleShowAll.bind(this);
        this.traverseQuestion = this.traverseQuestion.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        const { questionIndex } = this.state;

        if(prevState.questionIndex !== questionIndex) this.setTime();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    setTime() {
        const { questionIndex } = this.state;
        const { questions } = this.props;

        this.setState({seconds: questions[questionIndex].time});
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds > 0 ? (prevState.seconds - 1) : 0
        }));
    }

    traverseQuestion(direction: 'next' | 'back') {
        const { questionIndex, showLanding } = this.state;

        this.setState({showAnswer: false});
        if(direction === 'next' && showLanding) {
            this.setState({showLanding: false});
            this.setTime();
        }else if(direction === 'next') {
            this.setState({questionIndex: questionIndex + 1});
        }else if(direction === 'back' && questionIndex === 0) {
            this.setState({showLanding: true});
        }else if(direction === 'back') {
            this.setState({questionIndex: questionIndex - 1});
        }
    }

    toggleAnswer() {
        const { showAnswer } = this.state;

        this.setState({showAnswer: !showAnswer});
    }

    toggleShowAll() {
        const { showAll } = this.state;

        this.setState({showAll: !showAll});
    }

    renderQuestionCount() {
        const { questionIndex, showLanding } = this.state;
        const { questions } = this.props;
        const totalQuestions = questions.length;

        return(
          <div styleName="upper-text">
            {showLanding ? `There are ${ totalQuestions } questions in this set` : `${ questionIndex + 1 }/${ totalQuestions }`}
          </div>
        );
    }

    renderQuestion() {
        const { showLanding, questionIndex, showAnswer, showAll } = this.state;
        const { questions, title } = this.props;
        const currentQuestion = questions[questionIndex];

        if(showAll) {
            return(
              <div styleName="question-wrapper answers-wrapper">
              <div styleName="subheader">
                {title} Answers
              </div>
                {questions.map(question => {
                    return (
                      <div styleName="answers">
                        <div styleName="small-question">Question: {question.question}</div>
                        <div styleName="small-answer">Answer: {question.answer}</div>
                      </div>
                    );
                })}
                <Button text="Back" onClick={() => this.toggleShowAll()} />
              </div>
            );
        }

        if(showLanding) {
            return(
              <div styleName="question-wrapper">
                <div styleName="subheader">
                  Welcome to
                </div>
                <div styleName="header">
                  {title}
                </div>
                <div styleName="buttons column">
                  <Button text="Start Questions" onClick={() => this.traverseQuestion('next')} />
                  <div styleName="small-link" onClick={() => this.toggleShowAll()}>See All Questions and Answers</div>
                </div>
              </div>
            );
        }

        return (
          <div styleName="question-wrapper">
            <div styleName="question-img-wrap">
              { this.renderQuestionImg() }
              <div styleName={classNames('question', {small: showAnswer})}>
                {currentQuestion.question}
              </div>
            </div>
            { this.renderAnswer() }
            { this.renderCountdown() }
            { this.renderTimerBar() }
          </div>
        );
    }

    renderQuestionImg() {
        const { questionIndex, showAnswer } = this.state;
        const { questions } = this.props;
        const currentQuestion = questions[questionIndex];

        if(currentQuestion.questionImg) {
            return(
              <img styleName={classNames('questionImg', {small: showAnswer})} src={currentQuestion.questionImg} />
            );
        }
        return null;
    }

    renderAnswer() {
        const { showAnswer, questionIndex } = this.state;
        const { questions } = this.props;
        const currentQuestion = questions[questionIndex];

        if(showAnswer) {
            return(
              <div styleName="question-img-wrap">
                { this.renderAnswerImg() }
                <div styleName="answer">Answer: {currentQuestion.answer}</div>
              </div>
            );
        }return null;
    }

    renderAnswerImg() {
        const { questionIndex } = this.state;
        const { questions } = this.props;
        const currentQuestion = questions[questionIndex];

        if(currentQuestion.answerImg) {
            return(
              <img styleName="questionImg answerImg" src={currentQuestion.answerImg} />
            );
        }
        return null;
    }

    renderCountdown() {
        const { seconds, showAnswer } = this.state;

        const time = seconds > 0 ? seconds : 'Time\'s up!';
        return <div styleName={classNames('time', {'red': seconds < 10 && !showAnswer})}>{ time }</div>;
    }

    renderTimerBar() {
        const { questionIndex, seconds } = this.state;
        const { questions } = this.props;
        const currentQuestion = questions[questionIndex];

        const width = seconds / currentQuestion.time * 100;
        return (<div styleName="bar" style={{width: `${currentQuestion.time}%`}} ><div styleName="fill" style={{width: `${width}%`}} /></div>);
    }

    renderFooter() {
        const { showLanding } = this.state;

        if(showLanding) return <div></div>;

        return(
          <div styleName="footer">
            <div styleName="buttons">
              <Button text="Back" onClick={() => this.traverseQuestion('back')} />
              { this.renderAnswerButton() }
              { this.renderNextButton() }
            </div>
          </div>
        );
    }

    renderAnswerButton() {
        const { showAnswer } = this.state;
        const text = showAnswer ? 'Hide Answer' : 'Show Answer';
        return <Button text={text} onClick={() => this.toggleAnswer()} />;
    }

    renderNextButton() {
        const { questionIndex } = this.state;
        const { questions } = this.props;

        if(questionIndex + 1 === questions.length) return null;
        return <Button text="Next" onClick={() => this.traverseQuestion('next')} />;
    }

    render() {
        return(
          <div styleName="container">
            { this.renderQuestionCount() }
            { this.renderQuestion() }
            { this.renderFooter()}
          </div>
        );
    }
}

export default CSSModules(QuestionSet, styles, {allowMultiple: true});
