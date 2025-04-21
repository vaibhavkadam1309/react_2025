import { Component } from "react"
import User from "./User" 
// const About = ()=>{
//     return (<div><h1>About Component</h1>
//     <User name = {'kadam'}></User>
//     </div>)

// }

class About extends Component{
    constructor(props){
        console.log('parent constructor')
        super(props)

    }
    componentDidMount(){
        console.log('parent didmount')

    }
    render(){
        console.log('parent render')

        return  (<div><h1>About Component</h1>
            <User name = {'kadam'}></User>
            <User name = {'kadam'}></User>

            </div>)
        
    }
}
export default About