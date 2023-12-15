import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class HelpAndSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionStates: {},
    };
  }

  // Function to toggle the visibility of the answer for a specific question
  toggleAnswer = (questionId) => {
    this.setState((prevState) => ({
      questionStates: {
        ...prevState.questionStates,
        [questionId]: !prevState.questionStates[questionId],
      },
    }));
  };

  // FAQ data - replace with your actual FAQ content
  faqData = [
    {
      id: 1,
      question: "How do I report a missing grade?",
      answer: "... Answer for question 1 ...",
    },
    {
      id: 2,
      question: "Can I report a grading error for any course?",
      answer: "... Answer for question 2 ...",
    },
    // Add more FAQ items as needed
  ];

  render() {
    return (
      <Accordion>
        {this.faqData.map((faqItem) => (
          <Card key={faqItem.id}>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={faqItem.id.toString()}
                onClick={() => this.toggleAnswer(faqItem.id)}
              >
                {faqItem.question}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={faqItem.id.toString()}>
              <Card.Body>
                {this.state.questionStates[faqItem.id] && faqItem.answer}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    );
  }
}

export default HelpAndSupport;
