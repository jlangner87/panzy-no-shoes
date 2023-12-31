import bbomb from "./formAssets/bbomb.png"
import sscrub from "./formAssets/sscrub.png"
import sguide from "./formAssets/sguide.png"
import lotion from "./formAssets/lotion.png"
import sampleBox from "./formAssets/sample.png"
import shareBox from "./formAssets/share.png"

function OrderForm () {
  return (
    <div className="order-form">
      <form action="submit">
        <h2>Place an Order</h2>
        <h3>Your Information</h3>
        <label htmlFor="fname"> First Name</label>
        <input type="text" name="fname" id="fname" value={"Sample State"} placeholder="First Name"/>
        <label htmlFor="lname"> Last Name</label>
        <input type="text" name="lname" id="lname" value={"Sample State"} placeholder="Last Name"/>
        <label htmlFor="lname"> Email</label>
        <input type="text" name="email" id="email" value={"Sample State"} placeholder="Email Address"/>
        <label htmlFor="fname"> Street Address</label>
        <input type="text" name="fname" id="fname" value={"Sample State"} placeholder="First Name"/>
        <div className="address-bar">
          <div className="address-element">
            <label htmlFor="fname"> City</label>
            <br />
            <input type="text" name="fname" id="fname" value={"Sample State"} placeholder="First Name"/>
          </div>
          <div className="address-element">
            <label htmlFor="lname"> State</label>
            <br />
            <input type="text" name="lname" id="lname" value={"Sample State"} placeholder="Last Name"/>
          </div>
          <div className="address-element">
            <label htmlFor="lname"> Zip</label>
            <br />
            <input type="text" name="lname" id="lname" value={"Sample State"} placeholder="Last Name"/>
          </div>
        </div>
        <br/>
        <h3>Choose Your Escape</h3>
        <div className="order-item-container">
          <div className="order-item">
            <img className="preview-img" src={bbomb}/>
            <h3>Bath Bombs</h3>
            <br />
            <label className="testing123" htmlFor="subject">Size</label>
            <select name="subject" id="subject">
              <option value="3.5 oz">3.5 oz</option>
              <option value="7 oz">7 oz</option>
              <option value="14 oz">14 oz</option>
            </select>
            <br/>
            <label htmlFor="subject">Fragrance</label>
            <br/>
            <label htmlFor="subject">Quantity</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="order-item">
          <img className="preview-img" src={sscrub}/>
          <h3>Sugar Scrubs</h3> <br />
            <label htmlFor="subject">Size</label>
            <select name="subject" id="subject">
              <option value="3.5 oz">3.5 oz</option>
              <option value="7 oz">7 oz</option>
              <option value="14 oz">14 oz</option>
            </select>
            <br/>
            <label htmlFor="subject">Fragrance</label>
            <select name="subject" id="subject">
              <option value="">Lavender</option>
              <option value="">Geranium</option>
              <option value="">Lemon Berry</option>
              <option value="">Eucalyptus</option>
              <option value="">Peppermint</option>
            </select>
            <br/>
            <label htmlFor="subject">Quantity</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="order-item">
          <img className="preview-img" src={lotion}/>
          <h3>Lotions</h3> <br />
            <label htmlFor="subject">Size</label>
            <select name="subject" id="subject">
              <option value="3.5 oz">3.5 oz</option>
              <option value="7 oz">7 oz</option>
              <option value="14 oz">14 oz</option>
            </select>
            <br/>
            <label htmlFor="subject">Fragrance</label>
            <select name="subject" id="subject">
              <option value="">Lavender</option>
              <option value="">Geranium</option>
              <option value="">Lemon Berry</option>
              <option value="">Eucalyptus</option>
              <option value="">Peppermint</option>
            </select>
            <br/>
            <label htmlFor="subject">Quantity</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="order-item">
          <img className="preview-img" src={sampleBox}/>
          <h3>Sample Box</h3>
            <br/>
            <label htmlFor="subject">Quantity</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="order-item">
          <img className="preview-img" src={shareBox}/>
          <h3>Get 1 / Give 1</h3> <br />
            <br/>
            <label htmlFor="subject">Quantity</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <div className="order-item">
          <img className="preview-img" src={sguide}/>
          <h3>Soul Guide</h3> <br />
            <label htmlFor="month">Birth Month</label>
            <select name="month" id="month">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <br/>
            <label htmlFor="subject">Birth Day</label>
            <select name="subject" id="subject">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">14</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
              <option value="">31</option>
            </select>
            <br/>
            <label htmlFor="year">Birth Year</label>
            <select name="subject" id="subject">
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2008</option>
              <option value="">2007</option>
              <option value="">2006</option>
              <option value="">2005</option>
              <option value="">2004</option>
              <option value="">2003</option>
              <option value="">2002</option>
              <option value="">2001</option>
              <option value="">2000</option>
              <option value="">1999</option>
              <option value="">1998</option>
              <option value="">1997</option>
              <option value="">1996</option>
              <option value="">1995</option>
              <option value="">1994</option>
              <option value="">1993</option>
              <option value="">1992</option>
              <option value="">1991</option>
              <option value="">1990</option>
              <option value="">1989</option>
              <option value="">1988</option>
              <option value="">1987</option>
              <option value="">1986</option>
              <option value="">1985</option>
              <option value="">1984</option>
              <option value="">1983</option>
              <option value="">1982</option>
              <option value="">1981</option>
              <option value="">1980</option>
              <option value="">1979</option>
              <option value="">1978</option>
              <option value="">1977</option>
              <option value="">1976</option>
              <option value="">1975</option>
              <option value="">1974</option>
              <option value="">1973</option>
              <option value="">1972</option>
              <option value="">1971</option>
              <option value="">1970</option>
              <option value="">1969</option>
              <option value="">1968</option>
              <option value="">1967</option>
              <option value="">1966</option>
              <option value="">1965</option>
              <option value="">1964</option>
              <option value="">1963</option>
              <option value="">1962</option>
              <option value="">1961</option>
              <option value="">1960</option>
              <option value="">1959</option>
              <option value="">1958</option>
              <option value="">1957</option>
              <option value="">1956</option>
              <option value="">1955</option>
              <option value="">1954</option>
              <option value="">1953</option>
              <option value="">1952</option>
              <option value="">1951</option>
              <option value="">1950</option>
              <option value="">1949</option>
              <option value="">1948</option>
              <option value="">1947</option>
              <option value="">1946</option>
              <option value="">1945</option>
              <option value="">1944</option>
              <option value="">1943</option>
              <option value="">1942</option>
              <option value="">1941</option>
              <option value="">1940</option>
            </select>
          </div>
          
        </div>
        
        <label htmlFor="message">Notes</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Youe Message Here"></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default OrderForm