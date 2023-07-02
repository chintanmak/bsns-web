import React from 'react';
import "../css/_home.scss";
import satisfiedcustomer from '../../assets/icons/satisfied-customer.png';
import headerimg from '../../assets/images/personwithlaptop1.jpg';
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
import product1 from '../../assets/images/product1.jpg';
import tick from '../../assets/icons/tick.png';
import analysis from '../../assets/icons/analysis.png';
import notepad from '../../assets/icons/notepad.png';
import pen from '../../assets/icons/pen.png';
import graph from '../../assets/icons/graph.png';
import hometech from '../../assets/images/homeTech.jpeg';
import code from '../../assets/images/code.jpg';
import suit from '../../assets/images/suit.jpg';


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

    <div className='product_container'>
      <div className='product_img'>
      <img src={product1} />
      </div>

      <div className='product_details'>
        <p className='btn_color'>Services</p>
        <h1>Connect to Customers</h1>
        <div>
        <div className='lists_services'>
          <img src={tick} />
          <p>Engine optimization</p>
        </div>
        <div className='lists_services'>
          <img src={tick} />
          <p>Social media strategy</p>
        </div>
        <div className='lists_services'>
          <img src={tick} />
          <p>Real time and data</p>
        </div>
        <div className='lists_services'>
          <img src={tick} />
          <p>Online media management</p>
        </div>
        </div>
        <button className=' btn_about btn_bgcolor'>About</button>

      </div>
    </div>

    <div className='counter_container'>
      <div className='countsection'>
        <img src={analysis} />
        <h1>42%</h1>
        <p>Analysis</p>
      </div>

      <div className='countsection'>
        <img src={notepad} />
        <h1>73+</h1>
        <p>Advices</p>
      </div>

      <div className='countsection'>
        <img src={pen} />
        <h1>987</h1>
        <p>Solutions</p>
      </div>

      <div className='countsection'>
        <img src={graph} />
        <h1>4k</h1>
        <p>Strategies</p>
      </div>
    </div>

    <div className='cases_container'>
      <p className='btn_color'>Our Cases</p>
      <h1>Some of Our Recent Business Cases</h1>
      <p className='textp'>I watched the storm, so beautiful yet terrific.</p>
    <div className='cases_boxsection'>
      <div className='case_section'>
        <img src={hometech} />
        <p>Home of Technology</p>
      </div>

      <div className='case_section'>
        <img src={code} />
        <p>Home of Technology</p>
      </div>

      <div className='case_section'>
        <img src={suit} />
        <p>Home of Technology</p>
      </div>
    </div>
    </div>
    </>
  )
}
