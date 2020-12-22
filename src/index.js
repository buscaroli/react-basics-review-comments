import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import Comment from './Comment'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return(
        <div>
            <div className='ui bottom attached segment inverted very padded'>
                <div className='ui olive huge centered header'>
                    Welcome to this silly App.
                </div>
               
            </div>
            <div className='ui container grid'>
                <div className='six wide column'>
                    <Comment 
                        author={faker.name.findName()} 
                        image={faker.image.image()} 
                        text='I really liked this post!'/>
                    <Comment 
                        author={faker.name.findName()} 
                        image={faker.image.image()} 
                        text='Great as usual!'/>
                    <ApprovalCard>
                        <Comment 
                            author={faker.name.findName()} 
                            image={faker.image.image()} 
                            text='Great as usual!'/>
                    </ApprovalCard>
                    <ApprovalCard>
                        <Comment 
                            author={faker.name.findName()} 
                            image={faker.image.image()} 
                            text='Not impressed at all... I was expecting something more but at least it was free :)'/>
                    </ApprovalCard>
                </div>
                
            </div>
        </div> 
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
