import React from 'react';
import "../css/_home.scss";
import satisfiedcustomer from '../../assets/icons/satisfied-customer.png';
import headerimg from '../../assets/images/personwithlaptop.jpeg';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import document from '../../assets/icons/document.png';
import wheel from '../../assets/icons/wheel.png';
import fire from '../../assets/icons/fire.png';
import search from '../../assets/icons/search.png';
import centrepoint from '../../assets/icons/centrepoint.png';
import chart from '../../assets/icons/chart.png';
import list from '../../assets/icons/list.png';
import net from '../../assets/icons/net.png';
import paint from '../../assets/icons/paint.png';

export default function Home() {
  return (
    <>

    <div className='header_container'>
        <div className='header_titles'>
            <div className='satisfiedCustomerSection'>
                <img src={satisfiedcustomer} />
                <p>satisfied Customer</p>
            </div>
            <h1>Business Growth Management</h1>
            <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed subline.</p>
            <button>GET IT NOW</button>
        </div>
        <div className='header_image'>
            <img src={headerimg} />
        </div>
    </div>

    <div className='socialMedia'>
      <img src={facebook} />
      <img src={twitter} />
      <img src={instagram} />
    </div>

    <div className='planning_container'>
        <div className='plan_box'>
           <img src={document} className='icon-1'/>
           <div className='plan_titles'>
              <h2>Marketing Plan</h2>
              <p>All their equipment and instruments are alive.</p> 
           </div>
        </div>

        <div className='plan_box'>
           <img src={fire} className='icon-2'/>
           <div className='plan_titles'>
              <h2>Customer Service</h2>
              <p>Flare silhouetted the jagged edge of a wing.</p> 
           </div>
        </div>

        <div className='plan_box'>
           <img src={wheel} className='icon-3'/>
           <div className='plan_titles'>
              <h2>More Human</h2>
              <p>Then came the night of the first falling star.</p> 
           </div>
        </div>
    </div>

    <div className='grow_text'>
        <h1>Grow Business with Our Tools</h1>
    </div>

    <div className='services_container'>
      <div className='service_fullbox green_bgclr'>
        <img src={search} className='mainicon'/>
        <p className='primary_bgclr'>User Research</p>
        <img src={centrepoint} className='designing_boxicon'/>
      </div>

      <div className='service_fullbox primary_bgclr'>
        <img src={list} className='mainicon'/>
        <p className='green_bgclr'>Testing</p>
        <img src={chart} className='designing_boxicon'/>
      </div>

      <div className='service_fullbox third_bgclr'>
        <img src={paint} className='mainicon'/>
        <p className='btn_bgcolor'>Design</p>
        <img src={net} className='designing_boxicon'/>
      </div>
    </div>

    <div className='phara_container'>
      <h2>A Shining crescent far beneath the flying vessel. Mist enveloped the ship three hours out from port.</h2>
      <img src={net} />
    </div>
    </>
  )
}
