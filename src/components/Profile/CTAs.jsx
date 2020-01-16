import React from 'react'


function CTAs({className, data}){
    return (
    <div className={`button-wrp ${className}`}>
        <a className="btn-indigo" href={`tel:${data.contact_phone}`}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2.625H6.5625C7.04375 2.625 7.4375 3.01875 7.4375 3.5C7.4375 4.59375 7.6125 5.64375 7.93625 6.62375C8.0325 6.93 7.9625 7.27125 7.7175 7.51625L5.7925 9.44125C7.0525 11.9175 9.0825 13.9388 11.5588 15.2075L13.4837 13.2825C13.6587 13.1163 13.8775 13.0288 14.105 13.0288C14.1925 13.0288 14.2888 13.0375 14.3763 13.0725C15.3562 13.3962 16.415 13.5712 17.5 13.5712C17.9812 13.5712 18.375 13.965 18.375 14.4462V17.5C18.375 17.9812 17.9812 18.375 17.5 18.375C9.28375 18.375 2.625 11.7163 2.625 3.5C2.625 3.01875 3.01875 2.625 3.5 2.625ZM5.7225 4.375C5.775 5.15375 5.90625 5.915 6.11625 6.64125L5.06625 7.69125C4.7075 6.64125 4.48 5.53 4.40125 4.375H5.7225ZM14.35 14.8925C15.0937 15.1025 15.855 15.2338 16.625 15.2863V16.59C15.47 16.5113 14.3587 16.2838 13.3 15.9338L14.35 14.8925Z" fill="white" fillOpacity="0.87"/>
            </svg>
            Report a sighting
        </a>
        <a href={`mailto:${data.email}`} className="btn-gray-ghost">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22 6C22 4.89999 21.1 4 20 4H4C2.90002 4 2 4.89999 2 6V18C2 19.1 2.90002 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM12 13L4 8V18H20V8L12 13Z" fill="#a0aec0" />
            </svg>
        </a>
    </div>
    )
}

export default CTAs