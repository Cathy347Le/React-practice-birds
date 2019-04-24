import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import BirdList from "../BirdList/BirdList";
import Bird from "../Bird/Bird";
import CreateBird from "../CreateBird/CreateBird";
import "./App.css";

const birds = [
  {
    name: "Acadian Flycatcher",
    genus: "Empidonax virescens",
    conservationStatus:
      "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
    image:
      "https://cdn.audubon.org/cdn/farfuture/ultnKZor9cPFMcyALjvFJEFrjJhxsr_-ljICzfTVqWA/mtime:1486670068/sites/default/files/styles/nas_bird_teaser_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8qXImrfY",
    homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
  },
  {
    name: "Acorn Woodpecker",
    genus: "Melanerpes formicivorus",
    conservationStatus:
      "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
    image:
      "https://cdn.audubon.org/cdn/farfuture/rV9bfk6By-hfKO78V7Tz6LTH7MU1MyrstRcH8OY2TaE/mtime:1486671727/sites/default/files/styles/nas_bird_teaser_illustration/public/2420_Sibl_9780307957900_art_r1.jpg?itok=ySesZCv7",
    homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
  },
  {
    name: "American Black Duck",
    genus: "Anas rubripes",
    conservationStatus:
      "Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic 'swamping' of population.",
    image:
      "https://cdn.audubon.org/cdn/farfuture/eZFrB72N14qnZxWbHiiDLPNzTdX_1bZIa5zl5uLt5rc/mtime:1486671340/sites/default/files/styles/nas_bird_teaser_illustration/public/783_Sibl_9780307957900_art_r1.jpg?itok=o-HzSZ47",
    homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
  },
  {
    name: "American Flamingo",
    genus: "Phoenicopterus ruber",
    conservationStatus: "",
    image:
      "https://cdn.audubon.org/cdn/farfuture/nfXy1ET3ZGkV8yZFNpEqAv29fYGMxb_wM9N5T-PsazM/mtime:1486669819/sites/default/files/styles/nas_bird_teaser_illustration/public/601_Sibl_9780307957900_art_r1.jpg?itok=hnyWDc76",
    homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
  },
  {
    name: "American White Pelican",
    genus: "Pelecanus erythrorhynchos",
    conservationStatus:
      "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
    image:
      "https://cdn.audubon.org/cdn/farfuture/7f6gpIGHyMDreAYYd2Ul-cWSt-fet7z-VpeT7_1pYYU/mtime:1486669913/sites/default/files/styles/nas_bird_teaser_illustration/public/267_Sibl_9780307957900_art_r1.jpg?itok=B2mWUqa6",
    homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
  },
  {
    name: "Aplomado Falcon",
    genus: "Falco femoralis",
    conservationStatus: "",
    image:
      "https://cdn.audubon.org/cdn/farfuture/wPt5WS9x71iF-KzUvNCYlmRxfB4Tpd69hEO4xvWeYpM/mtime:1486680676/sites/default/files/styles/nas_bird_teaser_illustration/public/990_Sibl_9780307957900_art_r1.jpg?itok=N8wJoZOt",
    homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
  },
  {
    name: "Atlantic Puffin",
    genus: "Fratercula arctica",
    conservationStatus:
      "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
    image:
      "https://cdn.audubon.org/cdn/farfuture/aMP5saJTXEJUkLnsCNCksvXWFizkDGMDSeXQ0QbnL8w/mtime:1486682448/sites/default/files/styles/nas_bird_teaser_illustration/public/2514_Sibl_9780307957900_art_r1.jpg?itok=mn0Rbdzj",
    homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
  },
  {
    name: "Aztec Thrush",
    genus: "Ridgwayia pinicola",
    conservationStatus: "",
    image:
      "https://cdn.audubon.org/cdn/farfuture/T8HeHD73Q_OVisROp6NKOOTX_yKCBCPrChSr7wXxL1E/mtime:1486682449/sites/default/files/styles/nas_bird_teaser_illustration/public/3556_Sibl_9780307957900_art_r1.jpg?itok=sVi2hkAV",
    homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { birds };
    // console.log(this.state.birds);
    this.handleNewBird = this.handleNewBird.bind(this);
  }

  handleNewBird(newBird) {
    // let currState = this.state.birds;
    birds.push(newBird);
    this.setState(birds);
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <nav className="App-header">
          <div className="App-logo">
            <Link to="/">Audubon Society</Link>
          </div>
          <div className="App-link">
            <Link to="/bird/create">Add a New Bird</Link>
          </div>
        </nav>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={props => <BirdList birds={this.state.birds} />}
            />
            <Route
              path="/bird/create"
              render={props => (
                <CreateBird {...props} onNewBird={this.handleNewBird} />
              )}
            />
            <Route
              path="/bird/:name"
              render={props => <Bird {...props} {...this.state} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
