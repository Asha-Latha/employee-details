import React from 'react';
import axios from "axios";
import DisplayEmployee from './employee'
class ShowEmployee extends React.Component {
    constructor(props){
        super(props)
        this.state={
            allemps:[]
        }
    }
   
    componentWillMount(){
        this.getEmployees()
    }

    getEmployees(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response)=>{
           
             this.setState({allemps: response.data.data})
            console.log(response)},(error)=>{
                console.log(error)
            
        })
    }

    renderEmps=()=>{
        console.log('in renderEmps')
        return (
            this.state.allemps.map(employee=>{
                return (
                    <DisplayEmployee 
                    
                    id = {employee.id}
                    employee_name = {employee.employee_name}
                    employee_salary = {employee.employee_salary}
                    employee_age ={employee.employee_age}
                    profile_image = {employee.profile_image}>

                    </DisplayEmployee>
                )
            })
        )
}
render() { 
    return (
<div>
    <h1>list of employees</h1>

    <table border>
             <thead>
            <tr>   
               <th>ID</th>
               <th>Name</th>
               <th>Salary</th>
               <th>Age</th>
               <th>Profile Image</th>
             </tr>
             </thead>
           
               <tbody>
        
    {this.renderEmps()} 
    </tbody>
    </table>
    </div>

);
    
}}
 
export default ShowEmployee;