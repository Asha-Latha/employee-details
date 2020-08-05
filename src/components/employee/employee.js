import React from 'react';
import './employee.css'

class DisplayEmployee extends React.Component {
    state = {  }
    render() { 
        return ( 

            <tr>
                 <td>{this.props.id}</td>
             <td>{this.props.employee_name}</td>
                 <td>{this.props.employee_salary}</td>
                 <td>{this.props.employee_age}</td>
                 <td>{this.props.profile_image}</td>
                 </tr>
            
          
         );
    }
}
 
export default DisplayEmployee;