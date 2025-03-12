import React from 'react';

// Recursively clone an element and all of its children with the disabled prop
const recursivelyCloneWithDisabled = (element, disabled) => {
    if (React.isValidElement(element)) {
      // Recursively process children if they exist
      const newChildren = React.Children.map(element.props.children, child =>
        recursivelyCloneWithDisabled(child, disabled)
      );
      
      // Clone the current element with the disabled prop.
      // For custom components, ensure they handle/forward the disabled prop.
      return React.cloneElement(element, { disabled }, newChildren);
    }
    return element;
  };
  
  export const DisableContainer2 = ({ disabled, children }) => {
    // Recursively clone all children to apply the disabled prop
    const modifiedChildren = React.Children.map(children, child =>
      recursivelyCloneWithDisabled(child, disabled)
    );
  
    return (
      <div
      style={{
        // This style disables pointer events (mouse interactions) on the div.
        // Keyboard accessibility is managed by the disabled prop on individual components.
        pointerEvents: disabled ? 'none' : 'auto',
        opacity: disabled ? 0.5 : 1, // Visual feedback for the disabled state
      }}
    >
      {modifiedChildren}
    </div>
    );
  };