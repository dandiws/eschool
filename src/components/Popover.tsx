import React from 'react';
import usePortal from "../hooks/usePortal"

const Popover = () => {
  const createPortal = usePortal('#portal')

  return createPortal(
    <div className="btn">
      popover
    </div>
  )
}

export default Popover