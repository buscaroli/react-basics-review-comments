import React from 'react'


const currentTime = new Date(Date.now()).toTimeString().match(/^\d\d:\d\d/)

const textStyle = {
    padding: 10
}

function Comment(props) {
    return (
        <div className='ui comments'>
            <div className='comment'>
                <div className='content'>
                    <div class="ui image olive large label">
                        <img src={props.image} alt='avatar'/>
                        {props.author}
                    </div>
                    
                    <div className='metadata'>{currentTime}</div>
                    <div className='text'>
                        <h4 className='sub header' style={textStyle} >{props.text}</h4>
                    </div>
                    
                </div>
            </div>
        </div>    
    )
}

export default Comment
