import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {useQueryClient} from '@tanstack/react-query';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/"
    type='button'
    className='form-select btn-currency'
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled dropdown-menu-codes">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const SelectFlagDropdown = ({selected, onSelect}) => {
  const queryClient = useQueryClient();

  const { rates } = queryClient.getQueryData(['rates']);

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <i className={`currency-flag currency-flag-${selected.toLowerCase()}`} />
        <span>{selected}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {Object.keys(rates).map(code => rates[code] !== 1 && (
          <Dropdown.Item key={code} as="li" eventKey="1" onClick={() => onSelect(code)}>
            <i className={`currency-flag currency-flag-${code.toLowerCase()}`} />
            <span>{code}</span>
          </Dropdown.Item>
        ))}
        
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectFlagDropdown;