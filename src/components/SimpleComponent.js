// Code SimpleComponent Here
import React from 'react';
class SimpleComponent extends React.Component{
    state = {
        mood: 'happy'
    
    }


    changeMood = () => {
        console.log("i did it!")
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
        
    // this handles only DOM update. we still need the fetch request to update the database
    }


    render(){
        return(
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent