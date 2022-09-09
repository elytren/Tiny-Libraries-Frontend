import React from 'react'
import Library from './Library';

const Libraries = ({libs}) => {
  return (
    <>
        {libs.map((lib) => {
            return(
                <Library lib={lib}/>
                );
            }
        )}
    </>
  );
};

export default Libraries