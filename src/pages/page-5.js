import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navs from "../components/nav"

const furtherReading = [
  [
    "Spatial Software by John Palmer",
    "https://darkblueheaven.com/spatialsoftware/",
  ],
  [
    "Peripheral Vision Thread by Andy Matuschak",
    "https://mobile.twitter.com/andy_matuschak/status/1202663202997170176",
  ],
  [
    "Conversation App Design by Malcolm Ocean",
    "https://roamresearch.com/#/app/malcolmocean/page/Tbh3Tm5ju",
  ],
  [
    "Part of Speech: a conversational interface for writing by Katherine Ye and J. Juang",
    "http://hypotext.co/part-of-speech",
  ],
  [
    "Roam/Slack Killer by Jeff Tang",
    "https://twitter.com/tangjeff0/status/1248060649344831488",
  ],
  [
    "What is conversation? by Dubberly & Pangaro",
    "http://www.dubberly.com/articles/what-is-conversation.html",
  ],
  [
    "The Codex: An Atlas of Relations by Iian Neill",
    "https://doi.org/10.17175/SB004_008",
  ],
  ["muze.nyc", "https://muze.nyc"],
  ["Quill chat", "https://quill.chat/"],
  ["Roam Research", "https://roamresearch.com/"],
  ["Workflowy", "https://workflowy.com/"],
  ["Knovigator", "https://www.knovigator.com/"],
  ["Babylon House", "https://babylon.house/"],
  ["Kialo", "https://www.kialo.com/tour"],
  ["Twist", "https://twist.com/"],
  ["Spectrum Chat", "https://spectrum.chat/"],
  ["Zulip", "https://zulipchat.com/"],
  ["Tiddlywiki", "https://tiddlywiki.com/"],
  ["Wikum", "http://wikum.csail.mit.edu/"],
  ["Treesheets by Wouter Van Oortmerssen", "http://strlen.com/treesheets/"],
  ["Google Wave (RIP)", "https://en.wikipedia.org/wiki/Apache_Wave"],
  [
    "The Language of Twitter by Yoshiki Schmitz",
    "https://twitter.com/yoshikischmitz/status/1208632237358379008",
  ],
  [
    "'creativity' by Alex Norris",
    "https://twitter.com/dorrismccomics/status/839118593539223555?lang=en",
  ],
  [
    "Word Balloons by John Peña",
    "http://www.johnpena.net/#/sometimes-i-just-dont-know-how-to-be-in-the-world",
  ],
  [
    "Chat Disentanglement by Mehri & Carenini",
    "https://www.aclweb.org/anthology/I17-1062/",
  ],
  [
    "Nonlinear Conversational Medium by Gray Crawford, Scott Dombkowski",
    "https://www.graycrawford.com/nonlinear-conversational-medium",
  ],
  [
    "As We May Think by Vannevar Bush",
    "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/",
  ],
  [
    "Unflattening by Nick Sousanis",
    "https://www.hup.harvard.edu/catalog.php?isbn=9780674744431",
  ],
  [
    "The shape of a listener by James Somers",
    "https://jsomers.net/blog/conversation",
  ],
  [
    "What Realistic Film Dialogue Sounds Like by Nerdwriter1",
    "https://www.youtube.com/watch?v=CHp639vhUJg&feature=emb_title",
  ],
  [
    "Napkin by Eli Parra",
    "https://twitter.com/elzr/status/1171505815334739968",
  ],
  [
    "Messy Thought, Neat Thought by May-Li Khoe",
    "https://klr.tumblr.com/post/154784481858/messy-thought-neat-thought",
  ],
  [
    "PROCESS: desire paths in creative interfaces by Katherine Ye, with Angela Zhou and Raymond Zhong",
    "https://www.cs.cmu.edu/~kqy/resources/PROCESS_YConf.pdf",
  ],
  [
    "Conversation Theory: applications in education and epistemology by Gordon Pask",
    "http://scholar.googleusercontent.com/scholar?q=cache:t_wFM858daIJ:scholar.google.com/",
  ],
  [
    "Groves: a third-party relational are.na experience by Devin Halladay",
    "https://www.are.na/devin-halladay/groves",
  ],
]

const acknowledgements = [
  ["Cameron Burgess", "https://twitter.com/supercgeek"],
  ["Weiwei Hsu", "https://twitter.com/glitchyowl"],
  ["Wode 'Nimo' Ni", "https://twitter.com/wodenimoni"],
  ["Katherine Ye", "https://twitter.com/hypotext"],
  ["Eli Parra", "https://twitter.com/elzr"],
  ["Gray Crawford", "https://twitter.com/graycrawford"],
  ["Jonathan Skjøtt", "https://twitter.com/jskjott"],
  ["Jonathan Edwards", "https://twitter.com/jonathoda"],
  ["Yoshiki Schmitz", "https://twitter.com/yoshikischmitz"],
]

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Chapter5.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, fit: CONTAIN, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Chapter 5" />
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chapter 5"
        style={{ maxWidth: "700px" }}
      />
      <div style={{ textAlign: "center" }}>
        <p>
          This work was written Jan-Apr 2020 for the{" "}
          <a href="https://2020.programming-conference.org/home/salon-2020#program">
            Convivial Computing Salon.
          </a>
        </p>
        <p>
          Feel free to get in touch on Twitter:{" "}
          <a href="https://twitter.com/maxkriegers">@maxkriegers</a> or by other
          means on <a href="https://a9.io">a9.io</a>.
        </p>
        <h2>Acknowledgements</h2>
        <p>
          Thanks to{" "}
          {acknowledgements.map(([name, handle], idx) => (
            <span>
              <a href={handle}>{name}</a>
              {idx !== acknowledgements.length - 1 && ", "}
            </span>
          ))}
          . And many more.
        </p>
        <Navs left={4} />
        <h2>Further Reading</h2>
        <ul style={{ listStyleType: "none" }}>
          {furtherReading.map(([name, url]) => (
            <li>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default SecondPage
