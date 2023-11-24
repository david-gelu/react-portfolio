import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const TooltipWrap = (props: { children: any, desc: string, placement?: string }) => {
  const { children, desc } = props
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id="button-tooltip" >
        {desc}
      </Tooltip>}
    >{children}
    </OverlayTrigger>
  )
}
export default TooltipWrap