import { nanoid } from 'nanoid';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => {
        return (
          <Button
            key={nanoid()}
            type="button"
            onClick={onLeaveFeedback}
            color={option}
          >
            {option}
          </Button>
        );
      })}
    </Container>
  );
};
