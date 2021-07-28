import React from 'react';
import { requireAuth } from '../../requireAuth';

function Submit() {
    return (
        <div>
            Submit Page
        </div>
    )
}

export default requireAuth(Submit);
