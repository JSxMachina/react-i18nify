import React from 'react';
import PropTypes from 'prop-types';
import { translate } from './core';
import BaseComponent from './Base';

class Translate extends BaseComponent {
  render() {
    const { value, ...otherProps } = this.props;
    const translation = translate(value, otherProps);

    return (
      <React.Fragment>
        {translation}
      </React.Fragment>
    );
  }
}

Translate.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Translate;
