import React from 'react'

const Alert = ({content, styling}) => {
  return (
    <div>
        <div
  className={styling}
  role="alert"
>
  <strong className="text-sm justify-center font-medium">{content}</strong>

  
</div>
    </div>
  )
}

export default Alert