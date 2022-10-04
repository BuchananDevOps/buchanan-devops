import { CSS, styled } from '@nextui-org/react';

interface HighlightProps {
  children?: React.ReactNode;
  className?: string;
  css?: CSS;
}

const StyledHighlight = styled('div', {
  filter: 'blur(100px)',
  zIndex: '-1',
  opacity: '0.5',
  borderRadius: '100%',
  paddingBottom: '100%',
  transform: 'scale(0.8)',
});

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  return <StyledHighlight>{children}</StyledHighlight>;
};

export default Highlight;
