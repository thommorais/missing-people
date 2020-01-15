import React from 'react'
import {
  Link
} from "react-router-dom"
import Search from '../Search'

function Header(){
    return (
        <header className="flex bg-white border-b border-gray-200 inset-x-0 z-50 items-center py-2 sticky top-0">
                <div className="w-full max-w-6xl relative mx-auto">
                    <div className="flex items-center flex-wrap">
                        <div className="px-6 mb-2 sm:mb-0">
                             <Link to="/">
                                <svg width="210" height="51" viewBox="0 0 210 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 18.6044C8.5 9.23312 16.1287 1.60437 25.5 1.60437C34.8712 1.60437 42.5 9.23312 42.5 18.6044C42.5 30.4406 27.71 46.9519 27.0725 47.6531L25.5 49.3956L23.9275 47.6531C23.29 46.9519 8.5 30.4406 8.5 18.6044ZM12.75 18.6044C12.75 26.1269 20.8675 37.4319 25.5 42.9781C29.2187 38.4944 38.25 26.7431 38.25 18.6044C38.25 11.5706 32.5337 5.85437 25.5 5.85437C18.4662 5.85437 12.75 11.5706 12.75 18.6044ZM25.5 18.6044C27.2637 18.6044 28.6875 17.1806 28.6875 15.4169C28.6875 13.6531 27.2637 12.2294 25.5 12.2294C23.7362 12.2294 22.3125 13.6744 22.3125 15.4169C22.3125 17.1806 23.7362 18.6044 25.5 18.6044ZM19.125 23.9169C19.125 21.7919 23.375 20.7294 25.5 20.7294C27.625 20.7294 31.875 21.7919 31.875 23.9169V24.1719C30.3237 25.9569 28.05 27.1044 25.5 27.1044C22.95 27.1044 20.6762 25.9569 19.125 24.1719V23.9169Z" fill="#696DF8"/>
                                    <path d="M58.968 34H61.512V26.824C61.512 25.36 61.296 23.272 61.176 21.832H61.272L62.52 25.408L65.232 32.536H66.504L69.216 25.408L70.488 21.832H70.584C70.44 23.272 70.224 25.36 70.224 26.824V34H72.84V18.304H69.768L67.008 26.032L65.976 29.008H65.88L64.848 26.032L62.016 18.304H58.968V34ZM77.9565 20.152C78.9405 20.152 79.6605 19.504 79.6605 18.592C79.6605 17.656 78.9405 17.008 77.9565 17.008C76.9725 17.008 76.2525 17.656 76.2525 18.592C76.2525 19.504 76.9725 20.152 77.9565 20.152ZM76.5645 34H79.3245V22.216H76.5645V34ZM81.6698 32.656C82.8218 33.592 84.5258 34.288 86.1338 34.288C89.1098 34.288 90.7178 32.656 90.7178 30.64C90.7178 28.432 88.9418 27.664 87.3338 27.064C86.0618 26.608 84.8858 26.224 84.8858 25.312C84.8858 24.568 85.4378 24.016 86.6138 24.016C87.5498 24.016 88.3898 24.424 89.2058 25.024L90.4778 23.344C89.5178 22.6 88.1978 21.928 86.5658 21.928C83.9258 21.928 82.2698 23.392 82.2698 25.456C82.2698 27.424 84.0218 28.312 85.5818 28.888C86.8298 29.368 88.1018 29.8 88.1018 30.784C88.1018 31.6 87.5018 32.2 86.2298 32.2C85.0298 32.2 84.0218 31.696 82.9658 30.88L81.6698 32.656ZM92.0057 32.656C93.1577 33.592 94.8617 34.288 96.4697 34.288C99.4457 34.288 101.054 32.656 101.054 30.64C101.054 28.432 99.2777 27.664 97.6697 27.064C96.3977 26.608 95.2217 26.224 95.2217 25.312C95.2217 24.568 95.7737 24.016 96.9497 24.016C97.8857 24.016 98.7257 24.424 99.5417 25.024L100.814 23.344C99.8537 22.6 98.5337 21.928 96.9017 21.928C94.2617 21.928 92.6057 23.392 92.6057 25.456C92.6057 27.424 94.3577 28.312 95.9177 28.888C97.1657 29.368 98.4377 29.8 98.4377 30.784C98.4377 31.6 97.8377 32.2 96.5657 32.2C95.3657 32.2 94.3577 31.696 93.3017 30.88L92.0057 32.656ZM104.91 20.152C105.894 20.152 106.614 19.504 106.614 18.592C106.614 17.656 105.894 17.008 104.91 17.008C103.926 17.008 103.206 17.656 103.206 18.592C103.206 19.504 103.926 20.152 104.91 20.152ZM103.518 34H106.278V22.216H103.518V34ZM109.799 34H112.559V25.768C113.543 24.808 114.215 24.304 115.247 24.304C116.543 24.304 117.095 25.024 117.095 26.968V34H119.855V26.608C119.855 23.632 118.751 21.928 116.231 21.928C114.623 21.928 113.423 22.768 112.367 23.8H112.271L112.079 22.216H109.799V34ZM124.741 35.728C124.741 35.176 125.029 34.648 125.653 34.168C126.109 34.288 126.613 34.336 127.261 34.336H128.869C130.213 34.336 130.957 34.6 130.957 35.512C130.957 36.52 129.661 37.408 127.765 37.408C125.893 37.408 124.741 36.784 124.741 35.728ZM122.437 36.136C122.437 38.2 124.525 39.208 127.333 39.208C131.173 39.208 133.621 37.384 133.621 35.056C133.621 33.016 132.133 32.152 129.301 32.152H127.213C125.773 32.152 125.293 31.744 125.293 31.072C125.293 30.544 125.509 30.256 125.869 29.944C126.397 30.16 126.973 30.256 127.477 30.256C129.973 30.256 131.941 28.864 131.941 26.248C131.941 25.432 131.653 24.712 131.269 24.256H133.429V22.216H129.205C128.725 22.048 128.125 21.928 127.477 21.928C125.005 21.928 122.821 23.44 122.821 26.152C122.821 27.544 123.565 28.672 124.357 29.272V29.368C123.685 29.848 123.061 30.64 123.061 31.552C123.061 32.512 123.517 33.136 124.117 33.52V33.616C123.037 34.288 122.437 35.152 122.437 36.136ZM127.477 28.528C126.325 28.528 125.413 27.664 125.413 26.152C125.413 24.664 126.325 23.824 127.477 23.824C128.629 23.824 129.517 24.688 129.517 26.152C129.517 27.664 128.605 28.528 127.477 28.528ZM140.835 34H143.619V28.24H146.115C149.475 28.24 152.067 26.632 152.067 23.152C152.067 19.504 149.547 18.304 146.115 18.304H140.835V34ZM143.619 26.008V20.536H145.875C148.155 20.536 149.331 21.184 149.331 23.152C149.331 25.072 148.227 26.008 145.875 26.008H143.619ZM153.422 28.12C153.422 32.008 155.965 34.288 159.23 34.288C160.718 34.288 162.134 33.76 163.262 33.016L162.326 31.288C161.462 31.84 160.598 32.152 159.59 32.152C157.694 32.152 156.35 30.952 156.11 28.816H163.598C163.67 28.528 163.718 28.048 163.718 27.52C163.718 24.232 162.038 21.928 158.846 21.928C156.086 21.928 153.422 24.28 153.422 28.12ZM156.086 27.064C156.326 25.096 157.526 24.064 158.918 24.064C160.526 24.064 161.318 25.192 161.318 27.064H156.086ZM165.586 28.12C165.586 32.032 168.25 34.288 171.178 34.288C174.13 34.288 176.794 32.032 176.794 28.12C176.794 24.184 174.13 21.928 171.178 21.928C168.25 21.928 165.586 24.184 165.586 28.12ZM168.418 28.12C168.418 25.744 169.45 24.184 171.178 24.184C172.906 24.184 173.962 25.744 173.962 28.12C173.962 30.472 172.906 32.032 171.178 32.032C169.45 32.032 168.418 30.472 168.418 28.12ZM182.213 32.992C183.173 33.808 184.205 34.288 185.237 34.288C187.853 34.288 190.277 31.96 190.277 27.928C190.277 24.28 188.573 21.928 185.645 21.928C184.349 21.928 183.077 22.624 182.093 23.464H181.997L181.805 22.216H179.525V38.656H182.285V34.96L182.213 32.992ZM182.285 31.024V25.528C183.197 24.64 184.013 24.208 184.877 24.208C186.653 24.208 187.421 25.6 187.421 27.952C187.421 30.616 186.221 32.008 184.661 32.008C183.965 32.008 183.149 31.744 182.285 31.024ZM193.072 30.976C193.072 33.016 193.792 34.288 195.76 34.288C196.408 34.288 196.888 34.192 197.224 34.048L196.864 31.984C196.648 32.032 196.552 32.032 196.432 32.032C196.144 32.032 195.832 31.792 195.832 31.12V17.056H193.072V30.976ZM198.82 28.12C198.82 32.008 201.364 34.288 204.628 34.288C206.116 34.288 207.532 33.76 208.66 33.016L207.724 31.288C206.86 31.84 205.996 32.152 204.988 32.152C203.092 32.152 201.748 30.952 201.508 28.816H208.996C209.068 28.528 209.116 28.048 209.116 27.52C209.116 24.232 207.436 21.928 204.244 21.928C201.484 21.928 198.82 24.28 198.82 28.12ZM201.484 27.064C201.724 25.096 202.924 24.064 204.316 24.064C205.924 24.064 206.716 25.192 206.716 27.064H201.484Z" fill="#5458F7"/>
                                </svg>
                            </Link>
                        </div>
                        <Search />
                    </div>
                </div>
           </header>
    )
}

export default Header