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
  [
    "ELIZA conversation. Unknown, Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:ELIZA_conversation.jpg",
  ],
  [
    "Conversation on the terrace, Venice. Eugene de Blaas, 1909",
    "https://commons.wikimedia.org/wiki/File:Eugene_de_Blaas_-_Conversation_on_the_terrace,_Venice.jpg",
  ],
  [
    "A Conversation. Konishi Hirosada, circa 1850-1855.",
    "https://commons.wikimedia.org/wiki/File:Ikekichi_-_A_Conversation_-_Walters_9598.jpg",
  ],
  [
    "Penguin Conversation. Antony Stanley, 2007",
    "https://commons.wikimedia.org/wiki/File:Penguin_Conversation_(1186088012)_(2).jpg",
  ],
  [
    "Illustrations related to 'What is conversation?'. © Dubberly and Pangaro, 2011",
    "http://www.dubberly.com/category/topics/conversation-topics",
  ],
  [
    "Telegraph relay. The New International Encyclopaedia, 1905",
    "https://commons.wikimedia.org/wiki/File:Telegraph_-_relay.jpg",
  ],
  [
    "iPhone 6S. © Apple and Cricket Wireless, 2015",
    "https://www.cricketwireless.com/cell-phones/smartphones/apple-iphone-6s-32gb-space-gray.html",
  ],
  [
    "Transcription using cylinder phonograph. Electrical World, N.Y. 1897",
    "https://commons.wikimedia.org/wiki/File:Transcription_using_cylinder_phonograph.png",
  ],
  [
    "'Bernard' turntable via 'Paulnasca' on Wikimedia Commons, 2005",
    "https://en.wikipedia.org/wiki/File:Romanian_pickup1.jpg",
  ],
  [
    "Comparison of Full-Keyboard, Single-Shift, and Double-Shift Typerwriters in 1911, Larousse mensuel illustré, 1911",
    "https://commons.wikimedia.org/wiki/File:Comparison_of_Full-Keyboard,_Single-Shift,_and_Double-Shift_Typerwriters_in_1911.png",
  ],
  [
    "King Malcolms Gravestone at Glamis, SHakespeare's Tragedy of Macbeth, Harper & Brothers, 1898",
    "https://commons.wikimedia.org/wiki/File:King_Malcolms_Gravestone_at_Glamis.jpg",
  ],
  [
    "Sketchnote - visuelle Mitschrift von Vortrag auf einer Konferenz. via Wikimedia Commons, 2016",
    "https://commons.wikimedia.org/wiki/File:Sketchnote.jpg",
  ],
  [
    "Philosophy of Islam seminar, Columbia University, Alice Attie/Professor Souleymane Bashir, 2012",
    "https://commons.wikimedia.org/wiki/File:Class_Notes_Islam.jpg",
  ],
  [
    "Parse thicket constructed from parse trees for sentences, 2013, Bgalitsky on Wikimedia Commons",
    "https://commons.wikimedia.org/wiki/File:Parse_thicket_constructed_from_parse_trees_for_sentences.jpg",
  ],
  [
    "The care of trees in lawn, street and park, with a list of trees and shrubs for decorative use. B.E. Fernow, 1910",
    "https://commons.wikimedia.org/wiki/File:The_care_of_trees_in_lawn,_street_and_park,_with_a_list_of_trees_and_shrubs_for_decorative_use_(1910)_(20621549638).jpg",
  ],
  [
    "White Matter Connections Obtained with MRI Tractography by Xavier Gigandet et. al., 2008",
    "https://commons.wikimedia.org/wiki/File:White_Matter_Connections_Obtained_with_MRI_Tractography.png",
  ],
  [
    "BOSS Great Wall. Volker Springel, Max Planck Institute for Astrophysics, 2016",
    "https://commons.wikimedia.org/wiki/File:BOSS_Great_Wall.jpg",
  ],
  [
    "A spreading activation theory of memory. © John R. Anderson, 1983",
    "https://www.sciencedirect.com/science/article/abs/pii/S0022537183902013?via%3Dihub",
  ],
  [
    "Graphophone. Maison de la Bonne Presse, 1901",
    "https://en.wikipedia.org/wiki/File:Graphophone1901.jpg",
  ],
  [
    "The Disintegration Loops. © William Basinski, 2002",
    "https://williambasinski.bandcamp.com/album/the-disintegration-loops",
  ],
  [
    "The Social Network. © Sony Pictures, 2010",
    "https://www.youtube.com/watch?v=VlSkPA60ujQ",
  ],
  [
    "Conversations on the Plurality of Worlds. Bernard le Bovier de Fontenelle, 1686",
    "https://commons.wikimedia.org/wiki/File:Conversations_on_the_Plurality_of_Worlds_frontpiece.jpg",
  ],
  [
    "LIFO stack. Maxtremus on Wikimedia Commons, 2015",
    "https://commons.wikimedia.org/wiki/File:Lifo_stack.png",
  ],
  [
    "Threaded messaging comes to Slack. © Slack, 2017",
    "https://slackhq.com/threaded-messaging-comes-to-slack",
  ],
  [
    "It's pun threads like this that makes reddit worthwhile. © Reddit, 2013",
    "https://www.reddit.com/r/funny/comments/rx520/its_pun_threads_like_this_that_make_reddit/",
  ],
  [
    "Nonlinear conversational medium. © Crawford & Dombkowski, 2017.",
    "https://www.graycrawford.com/nonlinear-conversational-medium",
  ],
  [
    "Wikum: Bridging Discussion Forums and Wikis Using Recursive Summarization. © Amy X. Zhang et al, 2017.",
    "https://homes.cs.washington.edu/~axz/papers/wikum.pdf",
  ],
  [
    "David Perell on Twitter. © David Perell, 2020",
    "https://twitter.com/david_perell/status/1240836363190222848",
  ],
  [
    "Introducing Visual Dataflow (Observable). © Tucker et al, 2020.",
    "https://observablehq.com/@observablehq/introducing-visual-dataflow",
  ],
  [
    "Opus 101 manuscript. Beethoven, 1816",
    "https://en.m.wikipedia.org/wiki/File:Beethoven_opus_101_manuscript.jpg",
  ],
  [
    "Sonate Op 101 intro. Beethoven, 1816.",
    "https://commons.wikimedia.org/wiki/File:Sonate_Op101intro.jpg",
  ],
  [
    "Understanding Media. © Marshall McLuhan, Reissue, 1994.",
    "https://mitpress.mit.edu/books/understanding-media",
  ],
  [
    "Mindstorms. © Seymour Papert, Second Edition, 1993",
    "https://en.wikipedia.org/wiki/File:Mindstorms_(book).jpg",
  ],
  [
    "Everything is a Remix. © Kirby Ferguson, 2010",
    "https://vimeo.com/14912890",
  ],
  [
    "cows & cows & cows. © cyriak, 2010",
    "https://www.youtube.com/watch?v=FavUpD_IjVY",
  ],
  [
    "Spatial Software. John C. Palmer, 2020",
    "https://darkblueheaven.com/spatialsoftware/",
  ],
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
        Illich, Ivan, and Anne Lang. Tools for conviviality. Harper & Row, 1973.
      </Citation>
      <Citation>
        Carse, James. Finite and Infinite Games a Vision of Life as Play and
        Possibility. Free Press, 2012.
      </Citation>
      <Citation link="http://www.graycrawford.com/nonlinear-conversational-medium">
        G. Crawford, and S. Dombkowski, “Nonlinear Conversational Medium,”
        Nov-2017. [Online].
      </Citation>
      <Citation link="https://twitter.com/david_perell/status/1240836363190222848">
        @david_perell on Twitter, 19 March 2020
      </Citation>
      <Citation link="https://homes.cs.washington.edu/~axz/papers/wikum.pdf">
        Wikum: Bridging Discussion Forums and Wikis using Recursive
        Summarization. Amy X. Zhang, Lea Verou, David Karger. CSCW '17.
      </Citation>
      <Citation link="https://homes.cs.washington.edu/~axz/papers/PhDThesisFinal.pdf">
        Zhang, Amy Xian. Systems for collective human curation of online
        discussion. Diss. Massachusetts Institute of Technology, 2019.
      </Citation>
      <Citation link="https://doi.org/10.17175/SB004_008">
        Neill, I. and Kuczera, A. 2019. The Codex – an Atlas of Relations. Die
        Modellierung des Zweifels – Schlüsselideen und -konzepte zur
        graphbasierten Modellierung von Unsicherheiten. [Ausgewählte Beiträge
        der Tagung 19.-20.01.2018 an der Akademie der Wissenschaften und der
        Literatur. Mainz] Hg. von Andreas Kuczera / Thorsten Wübbena / Thomas
        Kollatz. Wolfenbüttel 2019. (= Zeitschrift für digitale
        Geisteswissenschaften / Sonderbände, (2019), 4).
        DOI:https://doi.org/10.17175/SB004_008.
      </Citation>
      <Citation link="https://observablehq.com/@observablehq/introducing-visual-dataflow">
        Tucker, T. 2019. Introducing Visual Dataflow. Observablehq.
      </Citation>
      <Citation>
        Kanerva, Pentti. Sparse Distributed Memory. United Kingdom, Cambridge,
        Mass., 1988.
        <br />
        via James Somers,{" "}
        <a href={"https://jsomers.net/blog/conversation"}>
          The shape of a listener
        </a>
      </Citation>
    </ul>
    <h3>Images</h3>
    <ol>
      {IMAGE_CITATIONS.map(([name, image]) => (
        <li>
          <cite>
            {name} <a href={image}>{image}</a>
          </cite>
        </li>
      ))}
    </ol>
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
