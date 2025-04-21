import React from "react";
class User extends React.Component{
constructor(props){
    super(props)
    console.log(this.props)
    this.json = {};
    this.state = {
        count : 0,
        json : {}
    }
    console.log('child constructor')

}
async componentDidMount(){
    console.log('child didmount')
    let data = await fetch("https://api.github.com/users/vaibhavkadam1309")
    let json = await data.json()
    this.setState({json : json})
    console.log(this.state)


}
    render(){

        let {count,json} = this.state;
        console.log(this.state)
        return (<div><h1>User name is : {this.props.name}</h1>
        <h1>Github User name is : {json.login}</h1>
        <button onClick={()=>{
            // this.state.count = this.state.count + 1 
            this.setState({count : this.state.count + 1})
            console.log(this.state.count)
        }}>Increse Count</button>
            <h2>Count is {count}</h2>
            </div>
        )
    }
}

export default User