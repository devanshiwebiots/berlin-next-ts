import { ImagePath } from "@/Constant";
import { Contact } from "@/Types/ChatType";
import React from "react";
import { Col } from "reactstrap";

export const ContactList: React.FC<{ data: Contact[] }> = ({ data }) => {
  return (
    <div className='contact-wrapper custom-scrollbar'>
      {data && data.length > 0 ? (
        <>
          {data.map((contact, index) => (
            <ul className='border-0' key={index}>
              <li className='common-space'>
                <div className='chat-time'>
                  {contact.image && <img className='img-fluid rounded-circle' src={`${ImagePath}/${contact.image}`} alt='user' />}
                  {contact.imageUser && (
                    <div className={`custom-name bg-light-${contact.color}`}>
                      <p className={`txt-${contact.color} f-w-500`}>{contact.imageUser}</p>
                    </div>
                  )}
                  <div>
                    <span>{contact.name}</span>
                    <p>{contact.phoneNumber}</p>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <Col sm='12'>
          <div>
            <div className='search-not-found text-center p-5'>
              <img className='img-100 mb-4' src={`${ImagePath}/other-images/sad.png`} alt='' />
              <p>{`Sorry, Not Found Any Contact`}</p>
            </div>
          </div>
        </Col>
      )}
    </div>
  );
};
