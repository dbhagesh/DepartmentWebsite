import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>CURIEX SOCIETY</h1>
              <hr />
              <p>Web Dev | App Dev | Robotics | Ethical Hacking</p>
              <div className="social-handlers">
                {/*Facebook*/}
                <a
                  href="https://www.facebook.com/curieuxsgtbkhalsa/?__tn__=kC-R&eid=ARBj8-60PPpivTtwOtoi__8NYEVslVzS_DzgSZL4LQm-ByhMouiGOwg1DXLfZ0daq65ODJajWpX9hyvp&hc_ref=ARQFS16JCbL00yZxsn00jElOdZ91RQEDGIqaP3A4wsVqAP9LuNsQMaF7uVrOBrydEuI&__xts__%5B0%5D=68.ARAlU1_OoD0iAaNX38aMT5FvpCmbjPzJi_ImTByRvSqyuxd6-IHVB4Eoa3hs6cyP78qSaQEDNhWuF74mCe_cB6rDAHLkhYBzCZ9_tO9ScKAMXE3knM-pxvhVyAVJlcEkt5U-o3fJ04bm4jik_4JrkRywNQkX8HfQ9MCSvtCQ0g1x7E_lt1Bx"
                  rel="nopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square" aria-hidden="true" />
                </a>
                {/*Github*/}
                <a
                  href="https://www.facebook.com/curieuxsgtbkhalsa/?__tn__=kC-R&eid=ARBj8-60PPpivTtwOtoi__8NYEVslVzS_DzgSZL4LQm-ByhMouiGOwg1DXLfZ0daq65ODJajWpX9hyvp&hc_ref=ARQFS16JCbL00yZxsn00jElOdZ91RQEDGIqaP3A4wsVqAP9LuNsQMaF7uVrOBrydEuI&__xts__%5B0%5D=68.ARAlU1_OoD0iAaNX38aMT5FvpCmbjPzJi_ImTByRvSqyuxd6-IHVB4Eoa3hs6cyP78qSaQEDNhWuF74mCe_cB6rDAHLkhYBzCZ9_tO9ScKAMXE3knM-pxvhVyAVJlcEkt5U-o3fJ04bm4jik_4JrkRywNQkX8HfQ9MCSvtCQ0g1x7E_lt1Bx"
                  rel="nopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github" aria-hidden="true" />
                </a>
                {/*Youtube*/}
                <a
                  href="https://www.facebook.com/curieuxsgtbkhalsa/?__tn__=kC-R&eid=ARBj8-60PPpivTtwOtoi__8NYEVslVzS_DzgSZL4LQm-ByhMouiGOwg1DXLfZ0daq65ODJajWpX9hyvp&hc_ref=ARQFS16JCbL00yZxsn00jElOdZ91RQEDGIqaP3A4wsVqAP9LuNsQMaF7uVrOBrydEuI&__xts__%5B0%5D=68.ARAlU1_OoD0iAaNX38aMT5FvpCmbjPzJi_ImTByRvSqyuxd6-IHVB4Eoa3hs6cyP78qSaQEDNhWuF74mCe_cB6rDAHLkhYBzCZ9_tO9ScKAMXE3knM-pxvhVyAVJlcEkt5U-o3fJ04bm4jik_4JrkRywNQkX8HfQ9MCSvtCQ0g1x7E_lt1Bx"
                  rel="nopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-youtube" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
