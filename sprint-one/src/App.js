import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import Videos from "./components/Videos";
import React from "react";
const comment = [
  {
    name: "Michael Lyons",
    date: "01/14/2020",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "01/01/2020",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "12/13/2019",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

class App extends React.Component {
  state = {
    sideVideo: [
      {
        id: "1ainjruutd1j",
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "https://i.imgur.com/5qyCZrD.jpg"
      },
      {
        id: "1aivjruutn6a",
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: "https://i.imgur.com/yFS8EBr.jpg"
      },
      {
        id: "1a3cjruucpf7",
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: "https://i.imgur.com/MMDMgD7.jpg"
      },
      {
        id: "1am3jruuwagz",
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "https://i.imgur.com/ibLw5q5.jpg"
      },
      {
        id: "1akljruuvhzt",
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "https://i.imgur.com/7rD6Mf6.jpg"
      },
      {
        id: "1ae5jruuoc4q",
        title: "Choose the Perfect Accommodations",
        channel: "Lydia Perez",
        image: "https://i.imgur.com/0hi3N4B.jpg"
      },
      {
        id: "1a4kjruuedd9",
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "https://i.imgur.com/DDJNZNw.jpg"
      },
      {
        id: "1a8qhruuzky3",
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "https://i.imgur.com/i6S8m7I.jpg"
      }
    ],
    mainVideo: [
      {
        id: "1af0jruup5gu",
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
        views: "1,001,023",
        likes: "110,985",
        duration: "type of <string>",
        video: "type of <string>",
        timestamp: "type of <number>",
        comments: comment
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <div className="page__flex">
          <div>
            <About mainVideoInfo={this.state.mainVideo} />
            <Comments />
            <div className="comment__container                                    q">
              <NewComments newComments={this.state.mainVideo[0].comments} />
            </div>
          </div>
          <div className="page__videos">
            <Videos sideVideos={this.state.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
