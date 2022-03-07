import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      
      <div>
        <table>
          <tr class="mt-3">
            <td><Link className="btn btn-sm btn-primary m-2" to="/">Beranda</Link></td> 
            <td><Link className="btn btn-sm btn-primary m-2" to="/tentangsaya">Tentang Saya</Link></td> 
            <td><Link className="btn btn-sm btn-primary m-2" to="/karya">Karya</Link></td>
            <td><Link className="btn btn-sm btn-primary m-2" to="/kontak">Kontak</Link></td>
            <td><Link className="btn btn-sm btn-primary m-2" to="/list">List</Link></td>
            <Link to="/gallery" className="nav-link">Gallery</Link> 
          </tr>
        </table>
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;