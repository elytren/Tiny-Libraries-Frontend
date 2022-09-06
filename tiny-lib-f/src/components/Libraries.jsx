import React from 'react'
import Library from './Library';

const Libraries = ({libraries}) => {
  return (
    <>
        {libraries.map((library) => {
            return(
                <Library library={library}/>
                );
            }
        )}
    </>
  );
};

export default Libraries