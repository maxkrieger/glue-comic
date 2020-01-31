import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Chapter1 from "../images/Chapter1.png"
import SEO from "../components/seo"

const Citation = ({ link, children }) => (
  <li>
    <cite>{link ? <a href={link}>{children}</a> : children}</cite>
  </li>
)

const CitationsPage = () => (
  <Layout>
    <SEO title="Citations" />
    <h1>Citations</h1>
    <h2>Works Cited</h2>
    <ul>
      <Citation link="https://doi.org/10.1016/S0022-5371(83)90201-3">
        J. R. Anderson, “A spreading activation theory of memory,” Journal of
        Verbal Learning and Verbal Behavior, vol. 22, no. 3, pp. 261–295, 1983.
      </Citation>
    </ul>
    <h3>Images</h3>
    <ul>
      <li>
        https://commons.wikimedia.org/wiki/File:The_care_of_trees_in_lawn,_street_and_park,_with_a_list_of_trees_and_shrubs_for_decorative_use_(1910)_(20621549638).jpg
      </li>
      <li>
        https://commons.wikimedia.org/wiki/File:White_Matter_Connections_Obtained_with_MRI_Tractography.png
      </li>
      <li>https://commons.wikimedia.org/wiki/File:BOSS_Great_Wall.jpg</li>
    </ul>
    <h2>Prior Work</h2>
    <ul>
      <Citation link="http://www.graycrawford.com/nonlinear-conversational-medium">
        G. Crawford, “Nonlinear Conversational Medium,” Nov-2017. [Online].
        Available: http://www.graycrawford.com/nonlinear-conversational-medium.
      </Citation>
    </ul>
    <h3>Comic Inspiration</h3>
    <ul>
      <Citation>
        N. Sousanis, Unflattening. Cambridge, MA: Harvard University Press,
        2015.
      </Citation>
      <Citation link="http://elzr.com/else/napkin-comic.pdf">
        E. Parra, “Napkin,” 25-Apr-2014. [Online]. Available:
        http://elzr.com/else/napkin-comic.pdf.
      </Citation>
      <Citation>Dynamicland Zine</Citation>
    </ul>
    <Link to="/">back</Link>
  </Layout>
)

export default CitationsPage
