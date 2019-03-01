import React from 'react';
import { Link } from 'react-router-dom';

function Fineprint(){
  return(
    <div>
      <div class="container">
        <h2>Fineprint</h2>
        <p>Cards Against Humanity is available under a <a href='https://creativecommons.org/licenses/by-nc-sa/2.0/'>BY-NC-SA 2.0 Creative Commons license</a>. That means you can use our content to make whatever, but you have to give us credit, you can’t profit from the use of our content (this means ad revenue is not allowed), and you have to share whatever you make in the same way we share it (this means you cant submit our content to any app store). We own the name Cards Against Humanity, so you have to call your crappy thing something else.</p>

        <p>This bearing in mind, I would like to thank the people of Cards Against Humanity for being supportive in the creation of their game and allowing people such as myself to create games like this for free distrubution and in celebration of their creation. I would also like to thank <a href='https://crhallberg.com/cah/'>'JSON Against Humanity'</a> <a href='https://crhallberg.com/'>(Chris Hallberg)</a> for providing an Open Source JSON which is the library that this game is based off of.</p>

        <p><a href='https://crhallberg.com/cah/'/></p>

        <button><Link to='/'>Back</Link></button>
      </div>
    </div>
  );
}
export default Fineprint;
