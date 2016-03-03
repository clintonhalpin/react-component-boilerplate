import React from 'react';

const MyComponent = () => {
    let styles = {
        textAlign: 'center',
        fontFamily: '"SF UI Text", "Helvetica Neue", arial, san-serif',
        fontSize: '3rem',
        padding: '2rem'
    }
    return(
        <div style={styles}>Reusable component</div>
    )
}

export default MyComponent;