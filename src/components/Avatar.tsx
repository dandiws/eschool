import React, { forwardRef } from 'react'
import { RiUser3Line } from 'react-icons/ri'

interface AvatarProps {
  url?: string
  onlineStatus?: 'active' | 'inactive'
  shape?: 'circle' | 'round'
  size?: 'small' | 'medium' | 'large'
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ url, onlineStatus, shape = 'circle', size }: AvatarProps, ref) => {
    const avatarImageStyle = {
      WebkitMaskImage: onlineStatus
        ? 'radial-gradient(circle at 2.5rem 2.5rem, transparent 6px, black 6px)'
        : 'none'
    }
    const shapeClassName = shape === 'circle' ? 'rounded-full' : 'rounded'
    const sizeClassName =
      size === 'small'
        ? 'w-8 h-8'
        : size === 'large'
        ? 'w-16 h-16'
        : 'w-12 h-12'

    const avatarImageClassName = `${shapeClassName} ${sizeClassName} bg-gray-400 flex items-center justify-center text-white text-xl overflow-hidden`
    return (
      <div ref={ref} id="avatar" className="relative">
        <div className={avatarImageClassName} style={avatarImageStyle}>
          {url ? <img src={url} alt="Avatar" /> : <RiUser3Line />}
        </div>
        {onlineStatus === 'active' ? (
          <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-green-500"></span>
        ) : onlineStatus === 'inactive' ? (
          <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-400"></span>
        ) : null}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export default Avatar
