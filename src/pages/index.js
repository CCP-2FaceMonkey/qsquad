import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{textAlign: 'center'}}>CYBERpunk DJs</h1>
    <div style={{display: 'grid', justifySelf: 'center'}}>
    <iframe title="spotify" src="https://open.spotify.com/embed/playlist/6kRhwKD5fVGXikYly86Brb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1089061540&color=%23e4dad2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hjalti-unnar-agustsson" title="Hjalti Unnar Agustsson" target="_blank" style="color: #cccccc; text-decoration: none;">Hjalti Unnar Agustsson</a> · <a href="https://soundcloud.com/hjalti-unnar-agustsson/sets/summer2020" title="Summer2020" target="_blank" style="color: #cccccc; text-decoration: none;">Summer2020</a></div> */}
    {/* <Link to="/page-2/">Submit a DJ request</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
