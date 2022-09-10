import React from 'react'
import Library from './Library';

const Libraries = ({libs}) => {
  return (
    <>
        {libs.map((lib) => {
            return(
                <Library key={lib.id} lib={lib}/>
                );
            }
        )}
    </>
  );
};

export default Libraries