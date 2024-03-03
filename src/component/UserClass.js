import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // this.name = props.name;

        this.state = {   //reserve variable
            userInfo : {}
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vitthallambrut");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }

    componentWillUnmount(){
        console.log("component Will Unmount")
    }

    render(){

        // const {name} = this.props;
        console.log(this.state.userInfo.name)
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @vitthallambrut</h4>
            </div>
        )
    }
}

export default UserClass;