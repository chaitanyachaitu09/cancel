import React, { Component } from 'react';

const names = ['Chaitanya','Chandana','Chandara','priyanaka','jahanavi'];

function name(){
    return(
        <div>
            {names.filter(name => name.includes('C')).map(filteredname => (
            <li>{filteredname}</li> 
            ))}
        </div>
    );
}


export default name;