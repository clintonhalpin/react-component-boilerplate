import React from 'react';

const MyComponent = () => {
    let styles = {
        fontFamily: '"SF UI Text", "Helvetica Neue", arial, san-serif',
        border: '1px solid blue',
        padding: '2rem',
        borderRadius: 3
    }
    return(
        <div style={styles}>Reusable component</div>
    )
}

export default MyComponent;