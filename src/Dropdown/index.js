import React, { Component} from 'react'


const Dropdown = () => {
    return( 
    <div class="ui selection dropdown">
        <input type="hidden" name="genre">
        <i class="dropdown icon"></i>
        <div class="default text">Genre</div>
        <div class="menu">
          <div class="item" data-value="1">Rap</div>
          <div class="item" data-value="0">Reggae</div>
        </div>
      </div>
    }
)

export default Dropdown;