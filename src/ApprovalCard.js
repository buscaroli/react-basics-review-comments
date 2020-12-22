import React from 'react';


function ApprovalCard(props) {
  return (
    <div className='ui cards raised'>
      <div className='card'>
        {props.children}
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Publish</div>
            <div class="ui basic red button">Bin</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard
