import React from 'react'

const EyeIcon: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return isVisible ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 14.5C9.10998 14.5 8.23995 14.2361 7.49993 13.7416C6.75991 13.2471 6.18314 12.5443 5.84254 11.7221C5.50195 10.8998 5.41283 9.99501 5.58647 9.12209C5.7601 8.24918 6.18868 7.44736 6.81802 6.81802C7.44736 6.18868 8.24918 5.7601 9.12209 5.58647C9.99501 5.41283 10.8998 5.50195 11.7221 5.84254C12.5443 6.18314 13.2471 6.75991 13.7416 7.49993C14.2361 8.23995 14.5 9.10998 14.5 10C14.5 11.1935 14.0259 12.3381 13.182 13.182C12.3381 14.0259 11.1935 14.5 10 14.5ZM10 3C3 3 0 10 0 10C0 10 3 17 10 17C17 17 20 10 20 10C20 10 17 3 10 3Z"
        fill="#e3e3e3"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        fill="#e3e3e3"
      />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.85837 7.5L12.5 10.1333V10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.299 7.76339 10.6631 7.5 10 7.5H9.85837ZM6.27504 8.16667L7.56671 9.45833C7.52504 9.63333 7.50004 9.80833 7.50004 10C7.50004 10.663 7.76343 11.2989 8.23227 11.7678C8.70111 12.2366 9.337 12.5 10 12.5C10.1834 12.5 10.3667 12.475 10.5417 12.4333L11.8334 13.725C11.275 14 10.6584 14.1667 10 14.1667C8.89497 14.1667 7.83516 13.7277 7.05376 12.9463C6.27236 12.1649 5.83337 11.1051 5.83337 10C5.83337 9.34167 6.00004 8.725 6.27504 8.16667ZM1.66671 3.55833L3.56671 5.45833L3.94171 5.83333C2.56671 6.91667 1.48337 8.33333 0.833374 10C2.27504 13.6583 5.83337 16.25 10 16.25C11.2917 16.25 12.525 16 13.65 15.55L14.0084 15.9L16.4417 18.3333L17.5 17.275L2.72504 2.5M10 5.83333C11.1051 5.83333 12.1649 6.27232 12.9463 7.05372C13.7277 7.83512 14.1667 8.89493 14.1667 10C14.1667 10.5333 14.0584 11.05 13.8667 11.5167L16.3084 13.9583C17.5584 12.9167 18.5584 11.55 19.1667 10C17.725 6.34167 14.1667 3.75 10 3.75C8.83337 3.75 7.71671 3.95833 6.66671 4.33333L8.47504 6.125C8.95004 5.94167 9.45837 5.83333 10 5.83333Z"
        fill="#e3e3e3"
      />
    </svg>
  )
}
export default EyeIcon