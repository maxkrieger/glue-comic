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

const IMAGE_CITATIONS = [
  "https://commons.wikimedia.org/wiki/File:ELIZA_conversation.jpg",
  "https://commons.wikimedia.org/wiki/File:Eugene_de_Blaas_-_Conversation_on_the_terrace,_Venice.jpg",
  "https://commons.wikimedia.org/wiki/File:Ikekichi_-_A_Conversation_-_Walters_9598.jpg",
  "https://commons.wikimedia.org/wiki/File:Penguin_Conversation_(1186088012)_(2).jpg",
  "http://www.dubberly.com/category/topics/conversation-topics",
  "https://commons.wikimedia.org/wiki/File:Telegraph_-_relay.jpg",
  "https://commons.wikimedia.org/wiki/File:Transcription_using_cylinder_phonograph.png",
  "https://en.wikipedia.org/wiki/File:Romanian_pickup1.jpg",
  "https://commons.wikimedia.org/wiki/File:Comparison_of_Full-Keyboard,_Single-Shift,_and_Double-Shift_Typerwriters_in_1911.png",
  "https://commons.wikimedia.org/wiki/File:King_Malcolms_Gravestone_at_Glamis.jpg",
  "https://commons.wikimedia.org/wiki/File:Sketchnote.jpg",
  "https://commons.wikimedia.org/wiki/File:Class_Notes_Islam.jpg",
  "https://commons.wikimedia.org/wiki/File:Parse_thicket_constructed_from_parse_trees_for_sentences.jpg",
  "https://en.wikipedia.org/wiki/File:Graphophone1901.jpg",
  "https://commons.wikimedia.org/wiki/File:The_care_of_trees_in_lawn,_street_and_park,_with_a_list_of_trees_and_shrubs_for_decorative_use_(1910)_(20621549638).jpg",
  "https://commons.wikimedia.org/wiki/File:White_Matter_Connections_Obtained_with_MRI_Tractography.png",
  "https://commons.wikimedia.org/wiki/File:BOSS_Great_Wall.jpg",
  "https://williambasinski.bandcamp.com/album/the-disintegration-loops",
  "https://www.youtube.com/watch?v=VlSkPA60ujQ",
  "https://commons.wikimedia.org/wiki/File:Conversations_on_the_Plurality_of_Worlds_frontpiece.jpg",
  "https://commons.wikimedia.org/wiki/File:Lifo_stack.png",
  "https://slackhq.com/threaded-messaging-comes-to-slack",
  "https://www.reddit.com/r/funny/comments/rx520/its_pun_threads_like_this_that_make_reddit/",
]

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
      <Citation link="http://www.dubberly.com/articles/what-is-conversation.html">
        Dubberly, Hugh, and Paul Pangaro. “What Is Conversation? How Can We
        Design for Effective Conversation?” Dubberly Design Office, 1 May 2009
      </Citation>
      <Citation>
        Carse, James. Finite and Infinite Games a Vision of Life as Play and
        Possibility. Free Press, 2012.
      </Citation>
      <Citation link="https://twitter.com/david_perell/status/1240836363190222848">
        @david_perell on Twitter, 19 March 2020
      </Citation>
      <Citation link="https://homes.cs.washington.edu/~axz/papers/PhDThesisFinal.pdf">
        Zhang, Amy Xian. Systems for collective human curation of online
        discussion. Diss. Massachusetts Institute of Technology, 2019.
      </Citation>
    </ul>
    <h3>Images</h3>
    <ul>
      {IMAGE_CITATIONS.map(image => (
        <a href={image}>
          <li>{image}</li>
        </a>
      ))}
    </ul>
    <h2>Prior Work</h2>
    <ul>
      <Citation link="http://www.graycrawford.com/nonlinear-conversational-medium">
        G. Crawford, and S. Dombkowski, “Nonlinear Conversational Medium,”
        Nov-2017. [Online].
      </Citation>
    </ul>
    <h3>Comic Inspiration</h3>
    <ul>
      <Citation>
        N. Sousanis, Unflattening. Cambridge, MA: Harvard University Press,
        2015.
      </Citation>
      <Citation link="https://twitter.com/yoshikischmitz/status/1202581577571557381">
        Yoshiki Schmitz on Twitter, 5-Dec-2019
      </Citation>
      <Citation link="http://elzr.com/else/napkin-comic.pdf">
        E. Parra, “Napkin,” 25-Apr-2014. [Online].
      </Citation>
      <Citation>Dynamicland Zine</Citation>
    </ul>
    <Link to="/">back</Link>
  </Layout>
)

export default CitationsPage
