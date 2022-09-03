import { ReactElement } from 'react';

interface Props {
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

const ConditionalWrapper: (props: Props) => ReactElement = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
