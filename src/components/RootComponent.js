import React from 'react';

import DisplayEmployee from '../components/employee/axiomapi';
import ShowEmployee from '../components/employee/employee';

class RootComponent extends React.Component {
 
    render() { 
        return ( 
            <div>
                <ShowEmployee> </ShowEmployee>
                    <DisplayEmployee></DisplayEmployee>
               
            {/* <Products name="REalme" since="10Y"></Products> */}
        </div>

         );
    }
}
 
export default RootComponent;
