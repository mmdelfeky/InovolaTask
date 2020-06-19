import React from 'react';
import {AppView} from '.';

const Section = ({children, border, ...rest}) => {
  return (
    <AppView
      stretch
      padding={5}
      {...(border ? {borderBottomWidth: 0.5} : {})}
      borderBottomColor="lightgrey"
      {...rest}>
      {children}
    </AppView>
  );
};

Section.defaultProps = {
  border: true,
};

export default Section;
